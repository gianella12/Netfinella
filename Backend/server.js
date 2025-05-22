import express from 'express';
import cors from 'cors';
import autenticacionRuta from './rutas/autenticacion.js'
import conexion from './baseDeDatos.js';

const app = express();
const PUERTO = 3000;

app.use(cors());
app.use(express.json());

app.use('/', autenticacionRuta);


app.listen(PUERTO, () => {
  console.log('server on port :', PUERTO)
})
console.log('¿Se exportó bien la conexión?', conexion ? 'Sí' : 'No');

