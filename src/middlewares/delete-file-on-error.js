import fs from 'fs/promises';
import { join } from 'path';

export const deleteFileOnError = async (err, req, res, next) => {
    if (req.file && req.filePath) {
        const filePath = join (req.filePath, req.file.filename);
        
        try {
            
        } catch (error) {
            
        }
    }
}