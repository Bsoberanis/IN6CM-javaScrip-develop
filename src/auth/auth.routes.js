import { Router } from "express";
import { login, register } from "./auth.controller.js";
import { registerValidator, loginValidator } from "../middlewares/validator.js";
import { uploadProfilePicture } from "../middlewares/multer-upload.js";

/* Solicitud POST */

const router = Router();

router.post(
    '/login',
    
    login
);

router.post(
    '/register',
    uploadProfilePicture.single("profilePicture"),
    registerValidator,
    
    register
);

export default router   