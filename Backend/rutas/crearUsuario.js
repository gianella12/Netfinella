import express from 'express';
import bcrypt from 'bcrypt';
import conexion from '../baseDeDatos.js';
import validator from 'validator';
import dotenv from 'dotenv';


dotenv.config();

const router = express.Router();

router.post('/usuario', async (req, res) => {
    const { email, contraseña, plan } = req.body
    console.log(email, contraseña, plan)

    if (!validator.isEmail(email)) {
        return res.status(400).json({ error: "El correo no es válido" });
    }
    try {
        const [filas] = await conexion.execute(
            'SELECT * FROM usuarios WHERE email = ? ', [email]
        )

        if (filas.length > 0) {
            return res.status(409).json({ mensaje: "Ya existe una cuenta registrada" });
        }
        const contraseñaHasheada = await bcrypt.hash(contraseña, 10);
        await conexion.execute(
            'INSERT INTO usuarios (email, contraseña, plan) VALUES (?, ?, ?)',
            [email, contraseñaHasheada,plan]
        );

        return res.status(200).json({
            mensaje: "Usuario creado con éxito",
            ok:true
        });
    } catch (error) {
        console.error("Error al crear usuario:", error);
        return res.status(500).json({ error: "Error interno del servidor"});
    }
})
export default router;