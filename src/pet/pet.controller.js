<<<<<<< HEAD
import User from "../users/user.model.js";
import Pet from "./pet.model.js";

export const savePet = async(req, res )=>{
    try {
        const data = req.body;
        const user = await User.findOne({email: data.email});
        

=======

import User from '../users/user.model.js'
import Pet from '../pet/pet.model.js'

export const savePet = async (req, res) => {
    try {
        
        const data = req.body;
        const user = await User.findOne({ email: data.email});
        console.log(user)
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
        if(!user){
            return res.status(404).json({
                success: false,
                message: 'Propietario no encontrado'
            })
        }

        const pet = new Pet({
            ...data,
            keeper: user._id
        });

        await pet.save();

        res.status(200).json({
            success: true,
            pet
        })

    } catch (error) {
        res.status(500).json({
<<<<<<< HEAD
            success:false,
            message: "Error al guardar masctota",
=======
            success: false,
            message: 'Error al guardar mascota',
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
            error
        })
    }
}

export const getPets = async (req, res) =>{

<<<<<<< HEAD
    const {limite = 10, desde = 0} = req.query;

    const query = {status: true};
=======
    const { limite = 10, desde = 0} = req.query;
    const query = { status: true };
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50

    try {
        
        const pets = await Pet.find(query)
<<<<<<< HEAD
        .skip(Number(desde))
        .limit(Number(limite));

        const petsWithOwnerNames = await Promise.all(pets.map(async (pet)=>{
=======
            .skip(Number(desde))
            .limit(Number(limite));

        const petsWithOwnerNames = await Promise.all(pets.map(async (pet) =>{
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
            const owner = await User.findById(pet.keeper);
            return {
                ...pet.toObject(),
                keeper: owner ? owner.nombre : "Propietario no encontrado"
            }
        }));

        const total = await Pet.countDocuments(query);

        res.status(200).json({
            success: true,
            total,
            pets: petsWithOwnerNames
        })
<<<<<<< HEAD
=======

>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener mascotas',
            error
        })
    }
<<<<<<< HEAD
}

export const searchPet = async (req, res) =>{

    const {id}= req.params;
=======

}

export const searchPet = async (req, res) => {

    const { id } = req.params;
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50

    try {
        
        const pet = await Pet.findById(id);

        if(!pet){
            return res.status(404).json({
                success: false,
                message: 'Mascota no encontrada'
            })
        }

        const owner = await User.findById(pet.keeper);

        res.status(200).json({
            success: true,
<<<<<<< HEAD
            pet:{
=======
            pet: {
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
                ...pet.toObject(),
                keeper: owner ? owner.nombre : "Propietario no encontrado"
            }
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al buscar mascota',
            error
        })
    }
}

<<<<<<< HEAD

export const deletePet = async (req,res ) =>{

    const {id}= req.params;
    try {
        
        await Pet.findByIdAndUpdate(id,{status: false});
=======
export const deletePet = async (req, res) => {
        
    const { id } = req.params;

    try {
        
        await Pet.findByIdAndUpdate(id, { status: false });
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50

        res.status(200).json({
            success: true,
            message: 'Pet eliminada exitosamente'
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al eliminar mascota',
            error
        })
    }
<<<<<<< HEAD
}

export const updatePet = async (req, res) => {
    
    const {id} = req.params;
    const {_id,...data} = req.body;

    try {
    
        const pet = await Pet.findByIdAndUpdate(id,data,{new: true});
        
        res.status(200).json({
            success: true,
            message: 'Mascota Actualizada',
            pet
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'No es posible editar a la mascota',
            error
        })
    }
=======
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
}