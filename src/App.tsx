import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login';
import Suscribirse from './suscribirse';
import PantallaPerfiles from './Perfiles';
import PasoUnoRegistro from './PasoUnoRegistro';
import { FC } from 'react';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/suscribirse" element={<Suscribirse />} />
        <Route path="/perfiles" element={<PantallaPerfiles />} />
        <Route path="/PasoUnoRegistro" element={<PasoUnoRegistro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;