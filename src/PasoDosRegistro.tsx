import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRegistro } from "./contexts/RegistroContext";



const PasoDosRegistro: React.FC = () => {
    console.log("adentro del registro")
    const [correo, setCorreo] = useState<string>("");
    const [contraseña, setContraseña] = useState<string>("");
    const { datos, setDatos } = useRegistro();
    // const navegar = useNavigate();

    useEffect(() => {
  // Solo traé el valor de la cookie si el contexto está vacío
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
    return (
        <div className="flex flex-col items-center justify-center mt-24 px-4">
            <div className="w-full max-w-md flex flex-col items-start text-left mt-4">
                <span className="flex justify-center  text-xs mt-2 items-center gap-1">
                    PASO <b>2</b> DE <b>4</b>
                </span>
                <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                    Crea una contraseña para <br />
                    que comiences tu membresía <br />
                </h1>
                <div className="mt-2 text-m text-gray-800 font-bold">
                    <p>¡Unos pasos más y listo!</p>
                    <p>Tampoco nos gustan los trámites</p>
                </div>
                <form className="w-full max-w-sm space-y-4 mt-4">
                    


                    <input
                        type="email"
                        placeholder="Email"
                        defaultValue={datos.email}
                        // onChange={(e) => setCorreo(e.target.value)}
                        readOnly
                        className="w-full px-4 py-2 rounded  border border-gray-600 placeholder-gray-500"
                    />
                    
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        className="w-full px-4 py-2 rounded  border border-gray-600 placeholder-gray-500"
                    />

                    <button
                        type="submit"
                        className="w-full py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded"
                        onClick={(e) => {
                            e.preventDefault();

                        }}
                    >
                        Siguiente
                    </button>

                </form>
            </div>

        </div>
    )
}
export default PasoDosRegistro;