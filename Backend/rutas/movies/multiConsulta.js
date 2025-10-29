import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

router.get('/buscar', async (req, res) => {
  const { nombre } = req.query;
   
  if (!nombre) {
    return res.status(400).json({ error: 'Falta el parámetro nombre' });
  }

  try {
    const url = `${BASE_URL}/search/multi?query=${encodeURIComponent(nombre)}&include_adult=false&language=es-ES&page=1&api_key=${API_KEY}`;

    const respuesta = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOilzMzVmNTExMGEwYzNiM2E3N2M2MGI4ZTRhNGNjMTJhZilsIm5iZil6MTc2MTM1MTM3Ni41MDIsInN1Yil6ljY4ZmMxNmQwMTUyNzA4NTk2MTlmYzM3MilsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uljoxfQ.NUWNfVkG90krFMbfBumm4heJGav3QelOxrJ2VdKG_Zw'
      }
    });

    const datos = await respuesta.json();

    const resultados = datos.results.map(peli => ({
      id: peli.id,
      titulo: peli.title || peli.name, 
      idioma_original: peli.original_language,
      descripcion: peli.overview,
      poster: peli.poster_path
        ? `https://image.tmdb.org/t/p/w500${peli.poster_path}`
        : null
    }));
    console.log(resultados)
    res.json(resultados); 
  } catch (error) {
    console.error('Error en multi consulta:', error);
    res.status(500).json({ error: 'Error al obtener resultados' });
  }
});

export default router;
