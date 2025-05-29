import { createContext, useContext, useState, ReactNode } from 'react';

interface DatosDeRegistro {
  email: string;
  contraseña: string;
}

interface RegistroContextProps {
  datos: DatosDeRegistro;
  setDatos: (nuevosDatos: Partial<DatosDeRegistro>) => void;
}

const RegistroContext = createContext<RegistroContextProps | undefined>(undefined);

export const RegistroProvider = ({ children }: { children: ReactNode }) => {
  const [datos, setDatosCompletos] = useState<DatosDeRegistro>({
    email: '',
    contraseña: '',
  });

  const setDatos = (nuevosDatos: Partial<DatosDeRegistro>) => {
    setDatosCompletos((prev) => ({ ...prev, ...nuevosDatos }));
  };

  return (
    <RegistroContext.Provider value={{ datos, setDatos }}>
      {children}
    </RegistroContext.Provider>
  );
};

export const useRegistro = () => {
  const contexto = useContext(RegistroContext);
  if (!contexto) {
    throw new Error('useRegistro debe usarse dentro de un RegistroProvider');
  }
  return contexto;
}; 


