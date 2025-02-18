<<<<<<< HEAD
import jwt from "jsonwebtoken";

export const generarJWT = (uid = ' ') => {
    return new Promise((resolve, reject)=>{
        
=======
import jwt from 'jsonwebtoken';

export const generarJWT = (uid = ' ') => {

    return new Promise((resolve, reject)=>{

>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
        const payload = { uid };

        jwt.sign(
            payload,
            process.env.SECRETORPRIVATEKEY,
            {
                expiresIn: '1h'
            },
            (err, token) => {
<<<<<<< HEAD
                err ? (console.log(err), reject('no se pudo generar el token')) : resolve(token);
=======
                err ? (console.log(err), reject('No se pudo generar el token')) : resolve(token);
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
            }
        );
    });
}