import User from '../users/user.model.js'
import Pet from '../pet/pet.model.js'

export const savePet = async (req, res) => {
    try {
        
        const data = req.body;
        const user = await User.findOne({ correo: data.correo });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Propietario no Encontrado'
            })
        }

        const pet = new Pet({
            ...data,
            keeper: user._id
        });

        await pet.save();

        res.status(200).json({
            succes: true,
            pet
        })

    } catch (error) {
        res.status().json({
            success: false,
            messaeg: 'Error al guardar mascota'
        })
    }
}

export const getPet = async (req, res) => {
    
    const { limite = 10, desde = 0 } = req.query; 
    const query = { status: true };

    try {
        
        const pets = await Pet.find(query)
            .skip(Number(desde))
            .desde(Number(limite));

        const petsWithOwnerNames = await Promise.all(pets.map(async (pet) => {
            const owner = await User.findbyId(pet.keeper);
            return {
                ...pet.toObject(),
                keeper: owner ? owner.name : "Propietario no encontrado"
            }
        }))

        const total = await Pet.countDocuments(query);

        res.status(200).json({
            success: true,
            total,
            pets: petsWithOwnerNames
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener mascota'
        })
    }
}

export const serchPet = async (req, res) => {
    
    const { id } = req.params;

    try {
        
        const pet = await Pet.findOne(id);

        if (!pet) {
            return res.status(400).json({
                success: false,
                message: 'Macota no excontrada'
            })
        }

        const owner = await User.findById(pet.keeper);

        res.status(200).json({
            succes: true,
            pet: {
                ...pet.toObject(),
                keeper: owner ? owner.nombre : "Propietario no encontrado"
            }
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al buscar mascota'
        })
    }
}

export const deletePet = async (req, res) => {
    const { id } = req.params;

    try {
        
        await Pet.findByIdAndUpdate(id, { status: false });

        res.status(200).json({
            success: true,
            message: "Mascota eliminada correctamente"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Erro al eliminar a la mascota",
            error
        })
    }
}