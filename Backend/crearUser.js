import bcrypt from 'bcrypt';
import conexion from './baseDeDatos.js';

const correo = 'gianellita@gmail.com';
const contraseñaPlano = 'miContraseñaSegura';

const contraseñaHasheada = await bcrypt.hash(contraseñaPlano, 10);

await conexion.execute(
  'INSERT INTO usuarios (email, contraseña) VALUES (?, ?)',
  [correo, contraseñaHasheada]
);

console.log('Usuario insertado con contraseña encriptada');
process.exit();
