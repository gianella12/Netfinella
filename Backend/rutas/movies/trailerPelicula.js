import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

router.get('/trailer', async (req, res) => {
    const { id } = req.query;

    if (!id) {
        return res.status(400).json({ error: 'Falta el parámetro id' });
    }
    try {
        const url = `${BASE_URL}/movie/${id}/videos?language=es-ES&api_key=${API_KEY}`;
        const respuesta = await fetch(url, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOilzMzVmNTExMGEwYzNiM2E3N2M2MGI4ZTRhNGNjMTJhZilsIm5iZil6MTc2MTM1MTM3Ni41MDIsInN1Yil6ljY4ZmMxNmQwMTUyNzA4NTk2MTlmYzM3MilsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uljoxfQ.NUWNfVkG90krFMbfBumm4heJGav3QelOxrJ2VdKG_Zw'
            }
        });
        const datos = await respuesta.json();
        const trailer = datos.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');

        if (!trailer) {
            return res.status(404).json({ error: 'Tráiler no encontrado' });
        }

        console.log(datos)
        res.json({
            key:trailer.key,
            site: trailer.site,
            url:`https://www.youtube.com/embed/${trailer.key}`,
        })
    } catch (error) {
        console.error('Error al obtener el tráiler:', error);
        res.status(500).json({ error: 'Error al obtener el tráiler' }); 
    }


    
})
export default router;