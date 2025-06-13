import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import autenticacionRuta from './rutas/autenticacion.js';
import perfiles from './rutas/perfiles.js';
import verificarCorreo from './rutas/verificarCorreo.js'
import registroRuta from './rutas/cookieEmail.js';
import conexion from './baseDeDatos.js';

const app = express();
const PUERTO = 3000;

app.use(cors({
  origin: 'http://localhost:5173', // o el puerto donde esté tu frontend
  credentials: true // 👈 esto permite el envío de cookies
}));
app.use(cookieParser());
app.use(express.json());

app.use('/', autenticacionRuta);
app.use('/perfiles', perfiles);
app.use('/validacion-correo', verificarCorreo)
app.use('/registro', registroRuta);



app.listen(PUERTO, () => {
  console.log('server on port :', PUERTO)
})
console.log('¿Se exportó bien la conexión?', conexion ? 'Sí' : 'No');

