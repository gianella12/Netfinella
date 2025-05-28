import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';


const Login: React.FC = () => {
    const [correo, setCorreo] = useState<string>("");
    const [contraseña, setContraseña] = useState<string>("");
    const [noEstaRegistrado, setNoEstaRegistrado] = useState<boolean>(false);
    const navegar = useNavigate();



    function validarDatos() {
        const esValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
        if (esValido) {
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
            if (!resultado.id || typeof resultado.id !== "number") {
                setNoEstaRegistrado(true)
                throw new Error("La respuesta no contiene un ID válido");
            } else {
                localStorage.setItem("usuario_id", resultado.id);
                setNoEstaRegistrado(false);
                navegar("/perfiles");
            }



        } catch (error) {
            console.log(error)
            if (error instanceof TypeError) {
                alert("No se pudo conectar al servidor. Intenta más tarde.");
            }

            setNoEstaRegistrado(true);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white backdrop-blur-sm bg-[url('/peliculas.png')] bg-cover bg-center">
            <div className="bg-black/60 px-8 py-10 rounded-md max-w-md w-full mx-auto text-white">
                <h2 className="text-3xl mb-6">Iniciar sesión </h2>
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
                    {noEstaRegistrado && (
                        <p className="text-red-500 text-sm">No existe un usuario con ese correo y/o contraseña</p>
                    )}
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
                <p className=" text-center my-4 ">O</p>
                <p>¿Todavía no estás suscrito? <Link to="/suscribirse">Suscribite</Link></p>

                <div className="flex items-center gap-2 mt-4">
                    <input type="checkbox" />
                    <p className="text-sm text-white">Recordarme</p>
                </div>


            </div>
        </div>
    )
}

export default Login;