<<<<<<< HEAD
import jwt from "jsonwebtoken";

import Usuario from '../users/user.model.js';

export const validarJWT = async(req, res, next) => {
    const token = req.header("x-token");

    if (!token) {
=======
import jwt from 'jsonwebtoken';

import Usuario from '../users/user.model.js';

export const validarJWT = async (req, res, next) => {

    const token = req.header("x-token");

    if(!token){
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
        return res.status(401).json({
            msg: "No hay token en la peticion"
        })
    }

    try {
<<<<<<< HEAD
=======
        
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

        const usuario = await Usuario.findById(uid);

<<<<<<< HEAD
        if (!usuario) {
=======
        if(!usuario){
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
            return res.status(401).json({
                msg: 'Usuario no existe en la base de datos'
            })
        }

<<<<<<< HEAD
        if (!usuario.estado) {
            return res.status(401).json({
                msg: 'Token no valido - usuario con estado: false'
=======
        if(!usuario.estado){
            return res.status(401).json({
                msg: 'Token no valido - usuarios con estado: false'
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
            })
        }

        req.usuario = usuario;

        next();
<<<<<<< HEAD

=======
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
    } catch (e) {
        console.log(e);
        res.status(401).json({
            msg: "Token no valido"
        })
    }
}