import { useState, useEffect } from "react";

const PantallaPerfiles: React.FC = () => {
    type Perfil = {
        id: number;
        nombre:string;
        avatar_url: string;
    }
    const [perfiles, setPerfiles] = useState<Perfil[]>([]);


    useEffect(() => {
        async function obtenerPerfiles() {
            try {
                const res = await fetch(`http://localhost:3000/perfiles`, {
                method: "GET",
                credentials: "include",
            });

                if (!res.ok) throw new Error("Error al obtener perfiles");
                const data: Perfil[] = await res.json();
                setPerfiles(data);
            } catch (error) {
                 console.error("Error al cargar perfiles:", error);
            }
            
        }

        obtenerPerfiles();
    }, []);

    function handleCrearPerfil() {
        console.log("Crear perfil clickeado");
    }

    return (
        
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
                <h2 className="text-3xl font-semibold mb-6">¿Quién está viendo?</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {perfiles.map((perfil) => (
                        <div key={perfil.id} className="flex flex-col items-center cursor-pointer group">
                            <div className="w-32 h-32 bg-gray-700 rounded overflow-hidden">
                                <img
                                    src={perfil.avatar_url || "/perfilpordefecto.webp"}
                                    alt={perfil.nombre}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="mt-2 text-center text-lg group-hover:text-red-500">
                                {perfil.nombre}
                            </span>
                        </div>
                    ))}

                    {perfiles.length < 5 && (
                        <div
                            onClick={handleCrearPerfil}
                            className="flex flex-col items-center cursor-pointer group"
                        >
                            <div className="w-32 h-32 bg-gray-800 rounded flex items-center justify-center text-5xl text-gray-400 hover:text-white transition">
                                +
                            </div>
                            <span className="mt-2 text-center text-lg group-hover:text-red-500">
                                Agregar perfil
                            </span>
                        </div>
                    )}
                </div>
            </div>
        
    )
}
export default PantallaPerfiles;