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
            messaeg: 'Propietario no Encontrado'
        })
    }
}