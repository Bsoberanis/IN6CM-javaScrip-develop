<<<<<<< HEAD
import { Router } from 'express';
import { check } from 'express-validator';
import { savePet, getPets, searchPet, deletePet } from './pet.controller.js';
import { validarCampos } from '../middlewares/validar-campos.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.post(
    '/',
    [
        validarJWT,
        check('email', 'Este no es un correo valido').not().isEmpty(),
        validarCampos
    ],
    savePet
);

router.put(
    '/:id',
    [
        validarJWT,
        check('id', 'No es un id válido').isMongoId(),
        check('email', 'Este no es un correo valido').optional(),
        validarCampos
    ],
    updatePet
);

router.get('/', getPets);

router.get(
    '/:id',
    [
        validarJWT,
        check('id', 'No es un ID válido').isMongoId(),
        validarCampos
    ],
    searchPet
);

router.delete(
    '/:id',
    [
        validarJWT,
        check('id', 'No es un ID válido').isMongoId(),
        validarCampos
    ],
    deletePet
);

export default router;
=======
import { Router } from "express";
import { savePet, getPets, searchPet, deletePet } from "./pet.controller.js";
import { createPetValidator, getPetByIdValidator, updatePetValidator, deletePetValidator } from "../middlewares/pet-validators.js";

const router = Router();

router.post("/addPet", createPetValidator, savePet);

router.get("/findPet/:id", getPetByIdValidator, searchPet);

router.get("/", getPets);

router.put("/updatePet/:id", updatePetValidator, savePet);

router.delete("/deletePet/:id", deletePetValidator, deletePet);

export default router;
>>>>>>> 91215ea (PMA terminado)
