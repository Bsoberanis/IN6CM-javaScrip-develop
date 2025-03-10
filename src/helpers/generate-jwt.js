<<<<<<< HEAD
import jwt from "jsonwebtoken";

export const generarJWT = (uid = ' ') => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
=======
import jwt from "jsonwebtoken"

export const generateJWT = (uid = " ") => {
    return new Promise((resolve, reject) => {
        const payload = { uid }
>>>>>>> 91215ea (PMA terminado)

        jwt.sign(
            payload,
            process.env.SECRETORPRIVATEKEY,
            {
<<<<<<< HEAD
                expiresIn: '1h'
            },
            (err, token) => {
                err ? (console.log(err), reject('No se pudo generar el token')) : resolve(token);
            }
        );
    });
}
=======
                expiresIn: "1h"
            },
            (err, token) =>{
                if(err){
                    reject({
                        success: false,
                        message: err
                    })
                }else{
                    resolve(token)
                }
            }
        )
    })
}
>>>>>>> 91215ea (PMA terminado)
