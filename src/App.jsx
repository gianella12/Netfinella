import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login.jsx';
import Suscribirse from './suscribirse.jsx'; 
import PantallaPerfiles from "./Perfiles.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/suscribirse" element={<Suscribirse />} />
         <Route path="/perfiles" element={<PantallaPerfiles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;