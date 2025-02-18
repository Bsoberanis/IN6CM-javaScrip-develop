import { Router } from "express";
import { check } from "express-validator";
<<<<<<< HEAD
import { deleteUser, getUserById, getUsers, updateUser } from "./user.controller.js";
import { existeUsuarioById } from "../helpers/db-validator.js";
import { validarCampos } from "../middlewares/validar-campos.js";
import { uploadProfilePicture } from "../middlewares/multer-upload.js";
import { tieneRole } from "../middlewares/validar-roles.js";
import {validarJWT} from "../middlewares/validar-jwt.js";

const router = Router();

router.get("/",getUsers);

router.get(
    "/findUser/:id", 
    [
        check("id","No es un ID valido").isMongoId(),
=======
import { getUsers, getUserById, updateUser, deleteUser } from "./user.controller.js";
import { existeUsuarioById } from "../helpers/db-validator.js";
import { validarCampos } from "../middlewares/validar-campos.js";
import { uploadProfilePicture } from "../middlewares/multer-upload.js";
import { validarJWT } from "../middlewares/validar-jwt.js";
import { tieneRole } from "../middlewares/validar-roles.js"

const router = Router();

router.get("/", getUsers);

router.get(
    "/findUser/:id",
    [
        check("id", "No es un ID válido").isMongoId(),
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
        check("id").custom(existeUsuarioById),
        validarCampos
    ],
    getUserById
<<<<<<< HEAD
);

router.put(
    '/:id',
    uploadProfilePicture.single('profilePicture'),
    [
        check("id","No es un ID valido").isMongoId(),
=======
)

router.put(
    "/:id",
    uploadProfilePicture.single('profilePicture'),
    [
        check("id", "No es un ID válido").isMongoId(),
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
        check("id").custom(existeUsuarioById),
        validarCampos
    ],
    updateUser
<<<<<<< HEAD
);
=======
)
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50

router.delete(
    "/:id",
    [
        validarJWT,
<<<<<<< HEAD
        tieneRole("ADMIN_ROLE","VENTAS_ROLE"),
        check("id","No es un ID valido").isMongoId(),
=======
        tieneRole("ADMIN_ROLE", "VENTAS_ROLE"),
        check("id", "No es un ID válido").isMongoId(),
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
        check("id").custom(existeUsuarioById),
        validarCampos
    ],
    deleteUser
)

export default router;