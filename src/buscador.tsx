import { useState } from "react";

const Buscador = ({ onBuscar }: { onBuscar: (termino: string) => void }) => {
  const [termino, setTermino] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    onBuscar(termino);  
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center my-4">
      <input
        type="text"
        placeholder="Buscar película..."
        value={termino}
        onChange={(e) => setTermino(e.target.value)}
        className="p-2 rounded-l w-80 text-black"
      />
      <button
        type="submit"
        className="bg-red-600 text-white p-2 rounded-r hover:bg-red-700 transition"
      >
        🔍
      </button>
    </form>
  );
};

export default Buscador;
