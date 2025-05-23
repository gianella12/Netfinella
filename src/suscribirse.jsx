import { useState } from "react";

function Suscribirse() {
  const [correo, setCorreo] = useState("");
  const [emailInvalido, setEmailInvalido] = useState(false);

  const manejarSubmit = (e) => {
    e.preventDefault();
    const esValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
    setEmailInvalido(!esValido);

    if (esValido) {
      
      console.log("Correo válido:", correo);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/peliculas.png')" }}
    >
      <div className="bg-black/70 text-white p-8 rounded-lg max-w-xl w-full space-y-6 border border-gray-700">
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