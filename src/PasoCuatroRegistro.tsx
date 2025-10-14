import Tarjeta from './componentes/tarjetasPlan'

const PasoCuatroRegistro: React.FC = () => {

     return (
          <>
               <main className="flex flex-col items-center justify-center min-h-screen">
                    <h1 className="flex items-center justify-center mb-3 text-3xl text-shadow-black">Elige tu plan</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
                    <Tarjeta
                         nombre="Plan Basico"
                         resolución={720}
                         Precio={7000}
                         calidad="Buena"
                         dispositivosPermitidos={1}
                         dispositivosDescarga={1}
                         plan='basic'
                    />
                    <Tarjeta
                         nombre="Plan Estandar"
                         resolución={1080}
                         Precio={11999}
                         calidad="Excelente"
                         dispositivosPermitidos={2}
                         dispositivosDescarga={2}
                         plan='standar'
                    />
                    <Tarjeta
                         nombre="Plan familiar"
                         resolución={1080}
                         Precio={11999}
                         calidad="Excelente"
                         dispositivosPermitidos={2}
                         dispositivosDescarga={2}
                         plan='family'
                    />

                    </div>
               </main>
          </>
     )
}
export default PasoCuatroRegistro;