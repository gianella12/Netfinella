import express from 'express';
const router = express.Router();

router.post('/email', (req, res) => {
  const { email } = req.body;

  res.cookie('registro_email', email, {
    httpOnly: false,
    secure: false,    // en dev ponelo en false, en prod true con HTTPS
    sameSite: 'strict',
    maxAge: 1000 * 60 * 10 // 10 minutos
  });

  res.send({ ok: true });
});

export default router;