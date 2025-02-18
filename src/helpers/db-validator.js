<<<<<<< HEAD
import Role from "../role/role.model.js";
import User from "../users/user.model.js";

export const esRoleValido = async(role = ' ') => {
    const existeRol = await Role.findOne({ role });

    if (!existeRol) {
        throw new Error('El rol ${ role } no existe en la base de datos');
        
    }
}
export const existenteEmail = async (correo = '')=>{
 
    const existeEmail = await User.findOne({correo});
 
=======
import Role from '../role/role.model.js';
import User from '../users/user.model.js';

export const esRoleValido = async (role = '') => {

    const existeRol = await Role.findOne({ role });

    if(!existeRol){
        throw new Error(`El rol ${ role } no existe en la base de datos`);
    }
}

export const existenteEmail = async (correo = ' ') => {

    const existeEmail = await User.findOne({ correo });

>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
    if(existeEmail){
        throw new Error(`El correo ${ correo } ya existe en la base de datos`);
    }
}

export const existeUsuarioById = async (id = '') => {
    const existeUsuario = await User.findById(id);

<<<<<<< HEAD
    if (!existeUsuario) {
        throw new Error(`El ID ${id} no existe`);
        
=======
    if(!existeUsuario){
        throw new Error(`El ID ${id} no existe`);
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
    }
}