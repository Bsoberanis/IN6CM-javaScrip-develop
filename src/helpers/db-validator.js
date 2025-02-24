import { Router } from "express";
import { login, register, updatePassword } from "./auth.controller.js";
import { registerValidator, loginValidator, upPassValidator } from "../middlewares/validator.js";
import { uploadProfilePicture } from "../middlewares/multer-upload.js";
import { deleteFileOnError } from "../middlewares/delete-file-on-error.js";
import { validarJWT } from "../middlewares/validar-jwt.js";
import Role from "../role/role.model.js";
import User from "../users/user.model.js";

const router = new Router();

export const esRoleValido = async (role = '') => {
    const existeRol = await Role.findOne({ role });
    if (!existeRol) {
        throw new Error(`El rol ${role} no existe en la base de datos`);
    }
};

export const existenteEmail = async (correo = '') => {
    const existeEmail = await User.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El correo ${correo} ya existe en la base de datos`);
    }
};

export const existeUsuarioById = async (id = '') => {
    const existeUsuario = await User.findById(id);
    if (!existeUsuario) {
        throw new Error(`El ID ${id} no existe`);
    }
};

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
