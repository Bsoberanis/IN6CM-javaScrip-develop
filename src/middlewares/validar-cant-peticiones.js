import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100,
    message: {
<<<<<<< HEAD
        seccess: false,
        msg: "Demasiadas peticiones desde esta IP, por favor intente de nuevo despues de 15 minutos"
=======
        success: false,
        msg: "Demasiadas peticiones desde esta IP, por favor intente de nuevo después de 15 minutos"
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
    }
});

export default limiter;