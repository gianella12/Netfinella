import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

function verificarToken(req,res,next){
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({error: "No estás autenticado"});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.usuarioId = decoded.id;
        next();

    } catch (error) {
        return res.status(401).json({error: error.message});
    }
}

export default verificarToken;