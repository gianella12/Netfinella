import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login';
import Suscribirse from './suscribirse';
import PantallaPerfiles from './Perfiles';
import PasoUnoRegistro from './PasoUnoRegistro';
import PasoDosRegistro from "./PasoDosRegistro";
import PasoTresRegistro from './PasoTresRegistro';
import PasoCuatroRegistro from './PasoCuatroRegistro';
import {FinDelRegistro} from './componentes/FinRegistro'
import { Toaster } from 'react-hot-toast';
import { FC } from 'react';

const App: FC = () => {
  return (
    <BrowserRouter>
    <Toaster /> 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/suscribirse" element={<Suscribirse />} />
        <Route path="/perfiles" element={<PantallaPerfiles />} />
        <Route path="/PasoUnoRegistro" element={<PasoUnoRegistro />} />
        <Route path="/PasoDosRegistro" element={<PasoDosRegistro />} />
        <Route path="/PasoTresRegistro" element={<PasoTresRegistro />} />
        <Route path="/PasoCuatroRegistro" element={<PasoCuatroRegistro />} />
        <Route path="/finDelRegistro" element={<FinDelRegistro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;