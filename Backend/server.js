import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import autenticacionRuta from './rutas/autenticacion.js';
import perfiles from './rutas/perfiles.js';
import registroRuta from './rutas/cookieEmail.js';
import conexion from './baseDeDatos.js';
import crearUsuario from './rutas/crearUsuario.js';
import multiBusqueda from './rutas/movies/multiConsulta.js';
import getvideo from './rutas/movies/trailerPelicula.js';


const app = express();
const PUERTO = 3000;

app.use(cors({
  origin: ['http://localhost:5173',"https://netfinella-git-main-gianellalastra4-5862s-projects.vercel.app"],
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());

app.use('/', autenticacionRuta);
app.use('/perfiles', perfiles);
app.use('/registro', registroRuta);
app.use('/crear', crearUsuario)

app.use('/movies', multiBusqueda);
app.use('/video', getvideo)


app.listen(PUERTO, () => {
  console.log('server on port :', PUERTO)
})
console.log('¿Se exportó bien la conexión?', conexion ? 'Sí' : 'No');

