import { JSX } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRegistro } from "../contexts/RegistroContext";


interface TarjetaProps {
     nombre: string,
     resolución: number | string,
     Precio: number,
     calidad: string,
     dispositivosPermitidos: number,
     dispositivosDescarga: number,
     plan: string
}

const Tarjetas = ({ nombre, resolución, Precio, calidad, dispositivosPermitidos, dispositivosDescarga, plan }: TarjetaProps): JSX.Element => {
     const navegar = useNavigate()
     const { datos, setDatos } = useRegistro();

     useEffect(() => {
          localStorage.removeItem("plan");
     }, []);

     const finRegistro = () => {
    
          setDatos({ ...datos, plan: plan })
          localStorage.setItem("plan", plan);
          navegar('/finDelRegistro')

     }

     return (
          <div
               className="bg-gradient-to-br from-gray-900 to-gray-800 
               rounded-xl p-6 flex flex-col space-y-4 
               hover:scale-105 hover:shadow-lg hover:shadow-red-600/30 
               transition-transform duration-300 cursor-pointer"
               onClick={() => finRegistro()}
          >
               <div>
                    <h2 className="text-2xl font-bold text-white">{nombre}</h2>
                    <p className="text-sm text-gray-400">{resolución}</p>
               </div>

               <hr className="border-gray-700" />

               <div>
                    <p className="text-sm text-gray-400">Precio mensual</p>
                    <p className="font-semibold text-red-500">{Precio}</p>
               </div>

               <div>
                    <p className="text-sm text-gray-400">Calidad de audio y video</p>
                    <p className="font-medium text-white">{calidad}</p>
               </div>

               <div>
                    <p className="text-sm text-gray-400">Resolución</p>
                    <p className="font-medium text-white">{resolución} (HD)</p>
               </div>

               <div>
                    <p className="text-sm text-gray-400">Dispositivos compatibles</p>
                    <p className="font-medium text-white">TV, computadora, teléfono, tablet</p>
               </div>

               <div>
                    <p className="text-sm text-gray-400">Dispositivos del hogar al mismo tiempo</p>
                    <p className="font-medium text-white">{dispositivosPermitidos}</p>
               </div>

               <div>
                    <p className="text-sm text-gray-400">Dispositivos de descarga</p>
                    <p className="font-medium text-white">{dispositivosDescarga}</p>
               </div>
          </div>
     )


}
export default Tarjetas;