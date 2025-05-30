import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegistro } from "./contexts/RegistroContext";

const Suscribirse: React.FC = () => {
  const [emailInvalido, setEmailInvalido] = useState<boolean>(false);
  const [emailRegistrado, setEmailRegistrado] = useState<boolean>(false);
  const {setDatos,datos} = useRegistro();
  const navegar = useNavigate();

  const manejarSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const correo = datos.email;
    const esValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo || "");
    setEmailInvalido(!esValido);

    if (esValido) {
      try {
        const respuesta = await fetch(`http://localhost:3000/validacion-correo`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ correo }),
        })
        
        if (!respuesta.ok) {
          throw new Error("Error del servidor al validar el correo");
        }
        const resultado = await respuesta.json();

        if (!resultado.registrado) {
          setEmailRegistrado(false);

          await fetch("http://localhost:3000/registro/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email: correo }),
          credentials: "include" // 👈 IMPORTANTE para que la cookie se guarde en el navegador
        });


          setDatos({ email: correo });
          navegar("/PasoUnoRegistro");

        } else {
          setEmailRegistrado(true); 
        }

      } catch (error) {
        console.error("Error al validar el correo:", error);

      }
    }
  };

  return (
    <div
      className=" bg-black/70 min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/peliculas.png')" }}
    >
      <div className=" text-white p-8 rounded-lg max-w-xl w-full ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Películas y series ilimitadas y mucho más</h1>
          <p className="mt-2 text-lg">A partir de $ 5.999. Cancelá cuando quieras.</p>
        </div>

        <form onSubmit={manejarSubmit} className="space-y-4">
          <p className="text-center text-sm">
            ¿Querés ver Netfinella ya? Ingresá tu email para crear una cuenta o reiniciar tu membresía.
          </p>

          <div className="flex w-full max-w-xl">
            <input
              type="email"
              placeholder="Correo electrónico"
              value={datos.email||""}
              onChange={(e) => setDatos({ email: e.target.value })}
              className={`w-full px-4 py-3 rounded bg-gray-800 text-white border ${emailInvalido || emailRegistrado ? "border-red-500" : "border-green-600"
                }`}
            />
            <button
              type="submit"
              className="w-36 py-3 ml-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded"
            >
              Comenzar {'>'}

            </button>
          </div>


          {emailInvalido && (
            <p className="text-red-500 text-sm">Escribí una dirección de email válida.</p>
          )}

          {emailRegistrado && (
            <p className="text-red-500 text-sm">La dirección de correo electronico esta registrada.</p>
          )}

        </form>
      </div>
    </div>
  );
}

export default Suscribirse;