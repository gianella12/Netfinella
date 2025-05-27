import express from 'express';
import conexion from '../baseDeDatos.js';
import validator from 'validator';


const router = express.Router();

router.post('/', async (req, res) => {
    const { correo } = req.body;

    if (validator.isEmail(correo)) {
        try {
            const [filas] = await conexion.execute(
                'SELECT * FROM usuarios WHERE email = ? ', [correo]
            )
            if (filas.length > 0) {
                return res.json({ registrado: true });
            } else {
                return res.json({ registrado: false });
            }
        } catch (error) {
            console.error("Error al consultar correo:", error);
            return res.status(500).json({ error: "Error interno del servidor" });
        }
    } else {
        console.log("El correo es invalido", correo)
    }

})
export default router;