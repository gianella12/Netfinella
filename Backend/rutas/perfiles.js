import express from 'express';
import conexion from '../baseDeDatos.js';
import verificarToken from "../middlewares/verificarToken.js";

const router = express.Router();

router.get('/', verificarToken, async (req,res) => {
    const  usuarioId  = req.usuarioId;
    try {
        const [usuario] = await conexion.execute(
            'SELECT * FROM usuarios WHERE id = ?',[usuarioId]
        )

        if(usuario.length === 0){
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const [perfiles] = await conexion.execute(
            'SELECT * FROM perfiles WHERE usuario_id = ?', [usuarioId]
        );

        res.json(perfiles);
        
    } catch (error) {
        console.error('Error al obtener perfiles:', error);
        res.status(500).json({ error: 'Error del servidor' });
    }
})
export default router;