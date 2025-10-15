import express from 'express';
import conexion from '../baseDeDatos.js';
import validator from 'validator';
const router = express.Router();

router.post('/email', async (req, res) => {
  const { email } = req.body;
  console.log("Correo recibido:", email);

  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "El correo no es válido" });
  }
  try {
    const [filas] = await conexion.execute(
      'SELECT * FROM usuarios WHERE email = ? ', [email]
    )

    if (filas.length > 0) {
      return res.status(409).json({ registrado: true, mensaje: "Correo ya registrado" });
    }

    res.cookie('registro_email', email, {
      httpOnly: false,
      secure: false,    // en dev ponelo en false, en prod true con HTTPS
      sameSite: 'strict',
      maxAge: 1000 * 60 * 10 // 10 minutos
    });

    return res.status(200).json({ registrado: false, ok: true });
  } catch (error) {
    console.error("Error al consultar correo:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }

});

export default router;