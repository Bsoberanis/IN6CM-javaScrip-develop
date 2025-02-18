import { Router } from "express";
import { check } from "express-validator";
<<<<<<< HEAD
import { deletePet, getPets, savePet, searchPet, updatePet } from "./pet.controller.js";
import {validarCampos} from "../middlewares/validar-campos.js";
import {validarJWT} from "../middlewares/validar-jwt.js";
=======
import { savePet, getPets, searchPet, deletePet } from "./pet.controller.js";
import { validarCampos } from "../middlewares/validar-campos.js"
import { validarJWT } from '../middlewares/validar-jwt.js'
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50

const router = Router();

router.post(
    "/",
    [
        validarJWT,
<<<<<<< HEAD
        check('email','Este no es un correo valido').not().isEmpty(),
=======
        check('email', 'Este no es un correo valido').not().isEmpty(),
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
        validarCampos
    ],
    savePet
)

<<<<<<< HEAD
router.put(
    "/:id",
    [
        validarJWT,
        check("id","No es un id válido").isMongoId(),
        check('email','Este no es un correo valido').optional(),
        validarCampos
    ],
    updatePet
)

=======
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
router.get("/", getPets)

router.get(
    "/:id",
    [
        validarJWT,
<<<<<<< HEAD
        check("id","No es un id válido").isMongoId(),
=======
        check("id", "No es un ID válido").isMongoId(),
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
        validarCampos
    ],
    searchPet
)

router.delete(
    "/:id",
    [
        validarJWT,
<<<<<<< HEAD
        check("id","No es un id válido").isMongoId(),
=======
        check("id", "No es un ID válido").isMongoId(),
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
        validarCampos
    ],
    deletePet
)

export default router;