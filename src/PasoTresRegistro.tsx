import { useNavigate } from "react-router-dom";
import { CheckCircle, Check } from "lucide-react";

const PasoTresRegistro: React.FC = () => {
    console.log("adentro del registro")
    const navegar = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center mt-24">
            <CheckCircle className="w-12 h-12 text-red-600 mb-4" strokeWidth={2} />
            <div className="flex flex-col items-center text-center mt-4">
                <span className="flex justify-center text-xs mt-2 items-center gap-1">
                    PASO <b>3</b> DE <b>4</b>
                </span>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 leading-snug mb-4">
                    Selecciona tu plan
                </h1>
                <ul className="space-y-3 text-black text-sm font-medium text-left">
                    <li className="flex items-start gap-2">
                        <Check className="text-red-600 w-5 h-5 mt-1" />
                        <span>Sin compromisos, cancela cuando quieras.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <Check className="text-red-600 w-5 h-5 mt-1" />
                        <span>Todo Netflinella a un bajo costo.</span>
                        </li>
                    <li className="flex items-start gap-2">
                        <Check className="text-red-600 w-5 h-5 mt-1" />
                        <span>Disfruta sin límites en todos tus dispositivos.</span>
                    </li>
                </ul>
                <button
                    type="submit"
                    className="w-full h-16 py-2 mt-6 bg-red-600 hover:bg-red-700 rounded text-amber-50 text-2xl font-bold"
                    onClick={() => { navegar("/PasoDosRegistro") }}
                >
                    Siguiente
                </button>
            </div>

        </div>
    )
}
export default PasoTresRegistro;