<<<<<<< HEAD
import { validationResult } from "express-validator";
=======

import { validationResult } from 'express-validator';
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50

export const validarCampos = (req, res, next) => {

    const errors = validationResult(req);

<<<<<<< HEAD
    if (!errors.isEmpty()) {
=======
    if(!errors.isEmpty()){
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
        return next(errors);
    }

    next();
}