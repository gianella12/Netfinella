import { useState } from "react";

const Suscribirse: React.FC = () => {
  const [correo, setCorreo] = useState<string>("");
  const [emailInvalido, setEmailInvalido] = useState<boolean>(false);

  const manejarSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const esValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
    setEmailInvalido(!esValido);

    if (esValido) {
      
      console.log("Correo válido:", correo);
    }
  };

  return (
    <div
      className=" bg-black/70 min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/peliculas.png')" }}
    >
      <div className=" text-white p-8 rounded-lg max-w-xl w-full ">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Películas y series ilimitadas y mucho más</h1>
          <p className="mt-2 text-lg">A partir de $ 5.999. Cancelá cuando quieras.</p>
        </div>

        <form onSubmit={manejarSubmit} className="space-y-4">
          <p className="text-center text-sm">
            ¿Querés ver Netfinella ya? Ingresá tu email para crear una cuenta o reiniciar tu membresía.
          </p>

          <input
            type="email"
            placeholder="Correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className={`w-full px-4 py-3 rounded bg-gray-800 text-white border ${
              emailInvalido ? "border-red-500" : "border-gray-600"
            }`}
          />

          {emailInvalido && (
            <p className="text-red-500 text-sm">✖ Escribí una dirección de email válida.</p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded"
          >
            Comenzar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Suscribirse;