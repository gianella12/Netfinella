import { useRegistro } from "../contexts/RegistroContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import toast from 'react-hot-toast';

export const FinDelRegistro = () => {
    const navegar = useNavigate();
    const { datos, setDatos } = useRegistro();
    const planUser = datos.plan || localStorage.getItem('plan')
  
    if (!datos.contraseña) return;

    useEffect(() => {
        toast.error("Por seguridad, si recargás la página tu contraseña se perderá. Y tendras que volvér al paso 2.⚠️ ")
    }, [])

    useEffect(() => {
        if (!datos.email) {
            const cookies = document.cookie.split(";").reduce((acc: Record<string, string>, cookie) => {
                const [key, value] = cookie.trim().split("=");
                acc[key] = decodeURIComponent(value);
                return acc;
            }, {});

            if (cookies["registro_email"]) {
                setDatos({ ...datos, email: cookies["registro_email"] });
            }
        }
    }, []);
    
    const confirmarRegistro = async () => {
        try {
            const respuesta = await fetch(`http://localhost:3000/crear/usuario`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(datos),
            })

            if (respuesta.ok) {
                toast.success("Registro exitoso 🎉");
                navegar('/')
            }
        } catch {

        }
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-br from-gray-900 to-gray-800">
            <h1 className="text-3xl font-bold mb-6">🎉 ¡Ya casi terminamos!</h1>
            <p className="mb-4">Revisá tus datos antes de confirmar:</p>

            <div className="bg-gray-700 p-6 rounded-xl shadow-md w-96 space-y-3">
                <p><span className="font-semibold">Email:</span> {datos.email}</p>
                <p><span className="font-semibold">Plan elegido:</span> {planUser}</p>
            </div>

            <button
                onClick={confirmarRegistro}
                className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl text-lg font-semibold transition"
            >
                Confirmar y crear cuenta
            </button>
        </div>
    )
}