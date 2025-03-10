<<<<<<< HEAD
<<<<<<< HEAD
import jwt from "jsonwebtoken";

export const generarJWT = (uid = ' ') => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
=======
=======
>>>>>>> b7dfb84 (PMA terminado)
import jwt from "jsonwebtoken"

export const generateJWT = (uid = " ") => {
    return new Promise((resolve, reject) => {
        const payload = { uid }
<<<<<<< HEAD
>>>>>>> 91215ea (PMA terminado)
=======
>>>>>>> b7dfb84 (PMA terminado)

        jwt.sign(
            payload,
            process.env.SECRETORPRIVATEKEY,
            {
<<<<<<< HEAD
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
=======
>>>>>>> b7dfb84 (PMA terminado)
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
<<<<<<< HEAD
}
>>>>>>> 91215ea (PMA terminado)
=======
}
>>>>>>> b7dfb84 (PMA terminado)
