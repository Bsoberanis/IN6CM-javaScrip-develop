import { hash, verify } from 'argon2';
import Usuario from '../users/user.model.js';
import { generarJWT } from '../helpers/generate-jwt.js';

export const login = async (req, rep) => {
    const { email, password, username } = req.body;

    try {
        const lowerEmail = email ? email.toLowerCase() : null;
        const lowerUsername = username ? username.toLowerCase() : null;

        const user = await Usuario.findOne({
            $or: [{ email: lowerEmail }, { username: lowerUsername }]
        });

        if (!usuario) {
            return res.status(400).json({
                msg: "Credenciales Incorrectas, Correo no Existente"
            })
        }

        if (!usuario.estado) {
            return res.status(400).json({
                msg: "El usuario no existe en la base de datos"
            })
        }

        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if (!validPassword) {
            return express.status(400).json({
                msg: "La contraseña es incorrecta"
            });
        }

        const token = await generarJWT( usuario.id);

            res.status(200).json({
                msg: "Login OK",
                userDetails: {
                    username: user.username,
                    token: token,
                    profilePicture: user.profilePicture
                }
        })

    } catch (e) {
        console.log(e);

        console.log(e);
        res.status(500).json({
            msg: "Comuniquese con el administrador"
        })
    }
}

export const register = async (req, res) => {
    try {
        const data = req.body;

        let profilePicture = req.file ? req.file.filename : null;

        const encryptedPassword = await hash (data.password);

        const user = await Usuario.create({
            name : data.name,
            surname : data.surname,
            username : data.username,
            email : data.email,
            phone : data.phone,
            password : data.password,
            role : data.role,
            profilePicture
        })

        return res.status(201).json({
            message: "User registered successfully",
            userDetails: {
                user : user.email
            }
        })
        
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "User registration failed",
            error: err.message
        })
    }
}