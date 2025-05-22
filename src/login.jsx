import { useState } from "react"
function Login() {
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");

    function validarDatos() {
        if (correo.includes('.com') && contraseña.length >= 8) {
            preguntarSiEsUsuario()
        } else {
            console.log("revisar el correo o la contraseña")
        }
    }
    async function preguntarSiEsUsuario() {
        try {
            const respuesta = await fetch(`http://localhost:3000/login-user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    correo: correo,
                    contraseña: contraseña,
                }),
            });

            const resultado = await respuesta.json();
            console.log(resultado)



            } catch {

            }
        }

return (
            <>
                <div className="flex flex-col items-center justify-center min-h-screen text-white backdrop-blur-sm bg-[url('/peliculas.png')] bg-cover bg-center">
                    <div className="bg-black/70 px-8 py-10 rounded-md max-w-md w-full mx-auto text-white">
                        <h2 className="text-3xl mb-6">Iniciar sesión en Netfinella</h2>
                        <form className="w-full max-w-sm space-y-4">
                            <input
                                type="email"
                                placeholder="Correo electrónico"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600"
                            />
                            <input
                                type="password"
                                placeholder="Contraseña"
                                value={contraseña}
                                onChange={(e) => setContraseña(e.target.value)}
                                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600"
                            />
                            <button
                                type="submit"
                                className="w-full py-2 bg-red-600 hover:bg-red-700 rounded"
                                onClick={(e) => {
                                    e.preventDefault();
                                    validarDatos();
                                }}
                            >
                                Iniciar sesión
                            </button>
                        </form>
                        <div className="flex items-center gap-2 mt-4">
                            <input type="checkbox" />
                            <p className="text-sm text-white">Recordarme</p>
                        </div>


                    </div>
                </div>
            </>
        )
    }

    export default Login