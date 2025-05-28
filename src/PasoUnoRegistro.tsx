import { useState, useEffect } from "react";
import { IconosDispositivos } from "./iconosDispositivos";
import { useNavigate } from "react-router-dom";

const PasoUnoRegistro: React.FC = () => {
    console.log("adentro del registro")
    const navegar = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center mt-24">
            <IconosDispositivos />
            <div className="flex flex-col items-center text-center mt-4">
                <span className="flex justify-center text-xs mt-2 items-center gap-1">
                    PASO <b>1</b> DE <b>4</b>
                </span>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 leading-snug">
                    Completa la <br />
                    configuración de tu <br />
                    cuenta
                </h1>
                <p className="text-m  mt-4 max-w-xs">
                    Netfinella está personalizado para ti.<br />
                    Crea una contraseña para comenzar<br />
                    a ver Netfinella.
                </p>
                <button
                    type="submit"
                    className="w-full h-16 py-2 mt-6 bg-red-600 hover:bg-red-700 rounded text-amber-50 text-2xl font-bold"
                    onClick={() => {   navegar("/PasoDosRegistro") }}
                >
                  Siguiente
                </button>
            </div>

        </div>
    )
}
export default PasoUnoRegistro;