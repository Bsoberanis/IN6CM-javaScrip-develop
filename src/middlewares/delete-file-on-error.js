import fs from 'fs/promises';
import { join } from 'path';

<<<<<<< HEAD
export const deleteFileonError = async (err, req, res, next)=>{
    if(req.file && req.filePath){
        const filePath = join(req.filePath, req.file.filename);
        try {
            await fs.unlink(filePath);
        } catch (unlinkErr) {
            console.error(`Error deleting file: `, unlinkErr)
        }
    }
    if(err.status === 400 || err.errors){
=======
export const deleteFileOnError = async (err, req, res, next) => {
    if(req.file && req.filePath){
        const filePath = join (req.filePath, req.file.filename);
        try {
            await fs.unlink(filePath);
        } catch (unlinkErr) {
            console.error('Error deleting file: ', unlinkErr)
        }
    }
    if(err.status === 400 || err.errors) {
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
        return res.status(400).json({
            success: false,
            errors: err.errors
        });
    }
    return res.status(500).json({
        success: false,
        message: err.message
    })
}