<<<<<<< HEAD
import { response, request } from "express";
import { hash, verify } from "argon2";
import User from "./user.model.js";

export const getUsers = async (req = request, res = response) =>{
    try {
        const {limite = 10, desde = 0} = req.query;
        const query = {estado : true};
=======
import { response, request } from "express"
import { hash, verify } from 'argon2';
import User from './user.model.js'

export const getUsers = async (req = request, res = response) => {
    try {
        const { limite = 10, desde = 0} = req.query;
        const query = { estado: true};
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50

        const [total, users] = await Promise.all([
            User.countDocuments(query),
            User.find(query)
                .skip(Number(desde))
                .limit(Number(limite))
        ])

        res.status(200).json({
            success: true,
            total,
            users
        })
<<<<<<< HEAD
    } catch (error) {
        res.status(500).json({
            success: false,
=======

    } catch (error) {
        res.status(500).json({
            succes: false,
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
            msg: 'Error al obtener usuarios',
            error
        })
    }
}

<<<<<<< HEAD
export const getUserById = async(req,res)=>{
    try {
        const {id} = req.params;
=======
export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50

        const user = await User.findById(id);

        if(!user){
            return res.status(404).json({
                success: false,
<<<<<<< HEAD
                msg: 'User not found'
=======
                msg: 'Usuario not found'
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
            })
        }

        res.status(200).json({
<<<<<<< HEAD
            success : true,
            user
        })

=======
            success: true,
            user
        })
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Error al obtener usuario',
            error
        })
    }
}

<<<<<<< HEAD
export const updateUser = async(req,res = response)=>{
    try {
        
        const {id} = req.params;
        const {password,email, ...data }= req.body;

        if(password){
=======
export const updateUser = async (req, res = response) => {
    try {
        
        const { id } = req.params;
        const { _id, password, email, ...data } = req.body;

        if(password) {
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
            data.password = await hash(password)
        }

        const user = await User.findByIdAndUpdate(id, data, {new: true});

        res.status(200).json({
<<<<<<< HEAD
            success: true,
            msg:'Usuario actualizado',
=======
            succes: true,
            msg: 'Usuario Actualizado',
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
            user
        })

    } catch (error) {
        res.status(500).json({
            success: false,
<<<<<<< HEAD
            msg:'Error al actualizar usuario',
=======
            msg: 'Error al actualizar usuario',
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
            error
        })
    }
}

<<<<<<< HEAD
export const deleteUser = async(req,res)=>{
    try {
        
        const {id} = req.params;

        const user = await User.findByIdAndUpdate(id, {estado: false},{new: true});

        const authenticateUser = req.user;

        res.status(200).json({
            succes : true,
            msg: 'Usuario desactivado',
            user,
            authenticateUser
=======
export const deleteUser = async (req, res) => {
    try {
        
        const { id } = req.params;

        const user = await User.findByIdAndUpdate(id, { estado: false }, {new: true});

        const authenticatedUser = req.user;

        res.status(200).json({
            success: true,
            msg: 'Usuario desactivado',
            user,
            authenticatedUser
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Error al desactivar usuario',
            error
        })
    }
}