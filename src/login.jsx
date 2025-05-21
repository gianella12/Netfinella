
function Login() {
  
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen text-white backdrop-blur-sm bg-[url('/peliculas.png')] bg-cover bg-center">
    <div className="bg-black/70 px-8 py-10 rounded-md max-w-md w-full mx-auto text-white">
      <h2 className="text-3xl mb-6">Iniciar sesión en Netfinella</h2>
      <form className="w-full max-w-sm space-y-4">
        <input
          type="email"
          placeholder="Correo electrónico"
        //   value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600"
        />
        <input
          type="password"
          placeholder="Contraseña"
        //   value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600"
        />
        <button
          type="submit"
          className="w-full py-2 bg-red-600 hover:bg-red-700 rounded"
        >
          Iniciar sesión
        </button>
      </form>
      
    </div>
    </div>
    </>
  )
}

export default Login