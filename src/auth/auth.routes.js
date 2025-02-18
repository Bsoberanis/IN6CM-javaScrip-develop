<<<<<<< HEAD
import { Router } from "express";
import { login,register, updatePassword } from "./auth.controller.js";
import { registerValidator,loginValidator, upPassValidator} from "../middlewares/validator.js"
import { uploadProfilePicture } from "../middlewares/multer-upload.js";
import { deleteFileonError } from "../middlewares/delete-file-on-error.js";
import {validarJWT} from "../middlewares/validar-jwt.js";

const router = new Router();
=======
import { Router } from 'express';
import { login, register } from './auth.controller.js'
import { registerValidator, loginValidator } from '../middlewares/validator.js';
import { uploadProfilePicture } from '../middlewares/multer-upload.js';
import { deleteFileOnError } from '../middlewares/delete-file-on-error.js';

const router = Router();
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50

router.post(
    '/login',
    loginValidator,
<<<<<<< HEAD
=======
    deleteFileOnError,
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
    login
);

router.post(
    '/register',
    uploadProfilePicture.single("profilePicture"),
    registerValidator,
<<<<<<< HEAD
    deleteFileonError,
    register
)

router.put(
    '/password/:id',
    validarJWT,
    upPassValidator,
    updatePassword
)

export default router
=======
    deleteFileOnError,
    register
);

export default router;
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
