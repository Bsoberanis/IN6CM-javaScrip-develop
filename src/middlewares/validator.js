<<<<<<< HEAD
import {body} from "express-validator"
import { validarCampos } from "./validar-campos.js"
import { existenteEmail , esRoleValido} from "../helpers/db-validator.js"
=======
import { body } from "express-validator";
import { validarCampos } from "./validar-campos.js";
import { existenteEmail, esRoleValido } from "../helpers/db-validator.js";
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50

export const registerValidator = [
    body("name", "The name is required").not().isEmpty(),
    body("surname", "The surname is required").not().isEmpty(),
<<<<<<< HEAD
    body("email", "Must enter a valid email").isEmail(),
    body("email").custom(existenteEmail),
    body('role').custom(esRoleValido),
    body("password", "Password must be at least 6 characters").isLength({min:8}),
    validarCampos
]

export const loginValidator =[
    body("email").optional().isEmail().withMessage("Enter a valid email address"),
    body("username").optional().isString().withMessage("Enter a valid username"),
    body("password", "The password must be at least 8 characters").isLength({min:8}),
    validarCampos
]

export const upPassValidator=[
    body("email").optional().isEmail().withMessage("Enter a valid email address"),
    body("username").optional().isString().withMessage("Enter a valid username"),
    body("password", "The password must be at least 8 characters").isLength({min:8}),
=======
    body("email", "You must enter a valid email").isEmail(),
    body("email").custom(existenteEmail),
    body('role').custom(esRoleValido),
    body("password", "Password must be at least 8 characters").isLength({ min: 8}),
    validarCampos
];

export const loginValidator = [
    body("email").optional().isEmail().withMessage("Enter a valid email address"),
    body("username").optional().isString().withMessage("Enter a valid username"),
    body("password", "Password must be at least 8 characters").isLength({min: 8}),
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
    validarCampos
]