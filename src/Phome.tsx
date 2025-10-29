import { useState} from "react";
import Buscador from "./buscador";
import { useNavigate } from "react-router-dom";
import { set } from "react-hook-form";

export const PantallaHome: React.FC = () => {
  const [peliculas, setPeliculas] = useState<[]>([]);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const navegar = useNavigate()
  const buscarPeliculas = async (termino: string) => {
    if (!termino) return;

    const res = await fetch(`http://localhost:3000/movies/buscar?nombre=${termino}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
  
    const data = await res.json();
    setPeliculas(data);
    setVideoUrl(null);
  };
  const mostrarVideo = async(id: number) => {
    
    const res = await fetch(`http://localhost:3000/video/trailer?id=${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    const data = await res.json();
    const url = data.url
    setVideoUrl(url);
   
 
  }
  return (
    <div className=" min-h-screen text-white">
      <Buscador onBuscar={buscarPeliculas} />

        {videoUrl ? (
        <div className="p-4 flex justify-center">
          <iframe
            width="800"
            height="450"
            src={videoUrl}
            title="Trailer"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-4">
          {peliculas.map((p: any) => (
            <div
              key={p.id}
              className="hover:scale-105 transition cursor-pointer"
              onClick={() => mostrarVideo(p.id)}
            >
              <img src={p.poster} alt={p.titulo} />
              <p className="mt-2 text-center">{p.titulo}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PantallaHome;
