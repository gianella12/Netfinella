import express from 'express';
import conexion from '../baseDeDatos.js';
import validator from 'validator';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/login-user', async (req, res) => {
const { correo, contraseña } = req.body;

  if (!contraseña || contraseña.length < 8) {
    return res.status(400).json({ error: 'La contraseña debe tener al menos 8 caracteres' });
  }

  let campo;
  if (validator.isEmail(correo)) {
    campo = 'email';
  } else if (validator.isMobilePhone(correo, 'es-AR')) { 
    campo = 'telefono';
  } else {
    return res.status(400).json({ error: 'Debés ingresar un correo o un teléfono válido' });
  }

  try {
   const[resultados] = await conexion.execute(
        `SELECT * FROM usuarios WHERE ${campo} = ?`,[correo]
    )

     if (resultados.length === 0) {
      return res.status(401).json({ error: 'Usuario no encontrado' });
    }

    const usuario = resultados[0];
    const contraseñaValida = await bcrypt.compare(contraseña, usuario.contraseña);

    if (!contraseñaValida) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    return res.status(200).json({ mensaje: 'Login exitoso 🎉' });

  } catch (error) {
        console.error('Error en login:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });

  }
})
export default router;