import { Router } from 'express';
import { check } from 'express-validator';
import { login, register } from './auth.controller.js';
import { validarCampos } from '../middlewares/validar-campos.js';
import { existenteEmail, esRoleValido } from '../helpers/db-validator.js';

const router = Router();

router.post(
    '/login',
    [ check ('password', 'La contraseña es obligatoria').not().isEmpty(),
        
        check('correo', 'Este correo no es un correo valido').isEmail(),
       validarCampos,
    ],
    login

);

router.post(
    '/register',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'La contraseña es obligatoria').isLength({ min: 6}),
        check('correo', 'Este no es un correo valido').isEmail(),
        check('correo').custom(existenteEmail),
        check('role').custom(esRoleValido),
        check('phone', 'El telefono debe de contener 8 numeros').isLength({ min: 8, max: 9 }),
        validarCampos,
    ],
    register

);

export default router;