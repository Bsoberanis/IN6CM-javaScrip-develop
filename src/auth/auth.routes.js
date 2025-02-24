import { Router } from "express";
import { login, register, updatePassword } from "./auth.controller.js";
import { registerValidator, loginValidator, upPassValidator } from "../middlewares/validator.js";
import { uploadProfilePicture } from "../middlewares/multer-upload.js";
import { deleteFileOnError } from "../middlewares/delete-file-on-error.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = new Router();

router.post(
    '/login',
    loginValidator,
    deleteFileOnError,
    login
);

router.post(
    '/register',
    uploadProfilePicture.single("profilePicture"),
    registerValidator,
    deleteFileOnError,
    register
);

router.put(
    '/password/:id',
    validarJWT,
    upPassValidator,
    updatePassword
);

export default router;
