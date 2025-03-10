<<<<<<< HEAD
import fs from 'fs/promises';
import { join } from 'path';
=======
import fs from "fs/promises";
import { join } from "path";
>>>>>>> 91215ea (PMA terminado)

export const deleteFileOnError = async (err, req, res, next) => {
    if (req.file && req.filePath) {
        const filePath = join(req.filePath, req.file.filename);
        try {
            await fs.unlink(filePath);
        } catch (unlinkErr) {
<<<<<<< HEAD
            console.error('Error deleting file: ', unlinkErr);
        }
    }
    if (err.status === 400 || err.errors) {
        return res.status(400).json({
            success: false,
            errors: err.errors
        });
    }
    return res.status(500).json({
        success: false,
        message: err.message
    });
}
=======
            console.log(`Error deleting file: ${unlinkErr}`);
        }
    }
    next(err);
}
>>>>>>> 91215ea (PMA terminado)
