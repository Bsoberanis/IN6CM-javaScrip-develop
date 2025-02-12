import { Router } from "express";
import { check } from "express-validator";
import { savePet, getPet, serchPet, deletePet } from "./pet.controller.js";
import { validarCampos } from "../middlewares/validar-campos.js";
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router()

router.post(
    "/",
    [
        validarJWT,
        check('correo', 'Este no es un correo valido').not().isEmpty(),
        validarCampos
    ],
    savePet
)

router.get("/", getPet)

router.get(
    "/:id",
    [
        validarJWT,
        check("id", "No es un id valido").isMongoId(),
        validarCampos
    ],
    serchPet
)

router.delete(
    "/:id",
    [
        validarJWT,
        check("id", "No es un id valido").isMongoId(),
        validarCampos
    ],
    deletePet
)

export default router;