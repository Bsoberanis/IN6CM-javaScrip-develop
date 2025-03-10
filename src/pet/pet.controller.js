<<<<<<< HEAD
import User from '../users/user.model.js';
import Pet from '../pet/pet.model.js';

=======
'use strict';

import User from '../user/user.model.js';
import Pet from './pet.model.js';

// Controlador para guardar una nueva mascota
>>>>>>> 91215ea (PMA terminado)
export const savePet = async (req, res) => {
    try {
        const data = req.body;
        const user = await User.findOne({ email: data.email });
<<<<<<< HEAD
        console.log(user);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Propietario no encontrado'
=======

        if (!user) {
            return res.status(404).json({ 
                success: false, 
                message: 'Propietario no encontrado' 
>>>>>>> 91215ea (PMA terminado)
            });
        }

        const pet = new Pet({
            ...data,
<<<<<<< HEAD
            keeper: user._id
=======
            keeper: user._id,
>>>>>>> 91215ea (PMA terminado)
        });

        await pet.save();

        res.status(200).json({
            success: true,
            pet
        });
<<<<<<< HEAD

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al guardar mascota',
=======
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al guardar la mascota',
>>>>>>> 91215ea (PMA terminado)
            error
        });
    }
}

<<<<<<< HEAD
=======
// Controlador para obtener la lista de mascotas con nombres de propietarios
>>>>>>> 91215ea (PMA terminado)
export const getPets = async (req, res) => {
    const { limite = 10, desde = 0 } = req.query;
    const query = { status: true };

    try {
        const pets = await Pet.find(query)
            .skip(Number(desde))
            .limit(Number(limite));

        const petsWithOwnerNames = await Promise.all(pets.map(async (pet) => {
            const owner = await User.findById(pet.keeper);
            return {
                ...pet.toObject(),
<<<<<<< HEAD
                keeper: owner ? owner.nombre : "Propietario no encontrado"
=======
                keeper: owner ? owner.nombre : "Propietario no encontrado",
>>>>>>> 91215ea (PMA terminado)
            };
        }));

        const total = await Pet.countDocuments(query);

        res.status(200).json({
            success: true,
            total,
<<<<<<< HEAD
            pets: petsWithOwnerNames
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener mascotas',
=======
            pets: petsWithOwnerNames,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener las mascotas',
>>>>>>> 91215ea (PMA terminado)
            error
        });
    }
}

<<<<<<< HEAD
=======
// Controlador para buscar una mascota por su ID
>>>>>>> 91215ea (PMA terminado)
export const searchPet = async (req, res) => {
    const { id } = req.params;

    try {
        const pet = await Pet.findById(id);

        if (!pet) {
<<<<<<< HEAD
            return res.status(404).json({
                success: false,
                message: 'Mascota no encontrada'
=======
            return res.status(404).json({ 
                success: false, 
                message: 'Mascota no encontrada' 
>>>>>>> 91215ea (PMA terminado)
            });
        }

        const owner = await User.findById(pet.keeper);

        res.status(200).json({
            success: true,
            pet: {
                ...pet.toObject(),
<<<<<<< HEAD
                keeper: owner ? owner.nombre : "Propietario no encontrado"
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al buscar mascota',
            error
        });
    }
}

export const deletePet = async (req, res) => {
    const { id } = req.params;

    try {
        await Pet.findByIdAndUpdate(id, { status: false });

        res.status(200).json({
            success: true,
            message: 'Pet eliminada exitosamente'
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al eliminar mascota',
            error
        });
    }
}

export const updatePet = async (req, res) => {
    const { id } = req.params;
    const { _id, ...data } = req.body;

    try {
        const pet = await Pet.findByIdAndUpdate(id, data, { new: true });

        res.status(200).json({
            success: true,
            message: 'Mascota actualizada',
            pet
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'No es posible editar a la mascota',
=======
                keeper: owner ? owner.nombre : "Propietario no encontrado",
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al buscar la mascota',
            error
        });
    }
};

// Controlador para eliminar una mascota por su ID
export const deletePet = async (req, res) => {
    try {
        const { id } = req.params;
        
        await Pet.findByIdAndUpdate(id, { status: false });

        res.status(200).json({ 
            success: true,
            message: 'Pet eliminada exitosamente' 
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al eliminar la mascota',
>>>>>>> 91215ea (PMA terminado)
            error
        });
    }
}
