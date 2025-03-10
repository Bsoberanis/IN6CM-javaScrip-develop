import { hash, verify } from "argon2";
import User from "../user/user.model.js";
import { generateJWT } from "../helpers/generate-jwt.js";

export const register = async (req, res) => {
    try {
        const data = req.body;
        const profilePicture = req.file ? req.file.filename : null;
        const encryptedPassword = await hash(data.password);

        const user = await User.create({
            ...data,
            password: encryptedPassword,
            profilePicture
        });

        return res.status(201).json({
            message: "User registered successfully",
            userDetails: {
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "User registration failed",
            error: error.message
        });
    }
};

export const login = async (req, res) => {
    const { email, username, password } = req.body;
    try {
        const lowerEmail = email ? email.toLowerCase() : '';
        const lowerUsername = username ? username.toLowerCase() : '';

        const user = await User.findOne({
            $or: [{ email: lowerEmail }, { username: lowerUsername }]
        });

        if (!user) {
            return res.status(400).json({
                message: "Invalid credentials",
                error: "User or email not found"
            });
        }

        const validPassword = await verify(user.password, password);
        if (!validPassword) {
            return res.status(400).json({
                message: "Invalid credentials",
                error: "Incorrect password"
            });
        }

        const token = await generateJWT(user.id);

        return res.status(200).json({
            message: "Login successful",
            userDetails: {
                username: user.username,
                token: token,
                profilePicture: user.profilePicture
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Login failed, server error",
            error: error.message
        });
    }
};

export const updatePassword = async (req, res) => {
    const { id } = req.params;
    const { password, email, oldPassword, username, ...data } = req.body;

    try {
        const lowerEmail = email ? email.toLowerCase() : null;
        const lowerUsername = username ? username.toLowerCase() : null;

        const user = await User.findOne({
            $or: [{ email: lowerEmail }, { username: lowerUsername }]
        });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const validPassword = await verify(user.password, oldPassword);
        if (!validPassword) {
            return res.status(400).json({
                message: "Incorrect password"
            });
        }

        if (!password) {
            return res.status(400).json({
                message: "New password is required"
            });
        }

        const hashPassword = await hash(password);
        const updatedUser = await User.findByIdAndUpdate(id, {
            ...data,
            password: hashPassword
        }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Password updated successfully",
            updatedUser
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error updating password",
            error: error.message
        });
    }
};
