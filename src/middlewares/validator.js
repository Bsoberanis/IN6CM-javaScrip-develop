import { body } from "express-validator";
import { validarCampos } from "./validar-campos.js";
import { existenteEmail, esRoleValido } from "../helpers/db-validator.js";

export const registerValidator = [
    body("name", "The name is required").not().isEmpty(),
    body("surname", "The surname is required").not().isEmpty(),
    body("email", "yu must enter a valid email").isEmail(),
    body("email").custom(existenteEmail),
    check('role').custom(esRoleValido),
    body("password", "Password must be at least 6 characters").isLength({ min: 8}),
    validarCampos
]
    
export const loginValidator = [
    body("email").optional.isEmail().withMessage("Enter a valid email addres"),
    body("username").optional().isString().withMessage("Entre a valid username"),
    body("password", "Password must be at least 8 characters").isLength({ min: 8}),
    validarCampos
]
    
