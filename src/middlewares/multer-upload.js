import multer from "multer";
import { dirname, extname, join } from "path";
import { fileURLToPath } from "url";

const CURRENT_DIR = dirname(fileURLToPath(import.meta.url));
const MIMETYPES = ["image/jpeg", "image/png", "image/jpg"];
<<<<<<< HEAD
const MAX_SIZE = 10000000
=======
const MAX_SIZE = 10000000;
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50

const createMulterConfig = (destinationPath) => {
    return multer({
        storage: multer.diskStorage({
            destination: (req, file, cb) => {
<<<<<<< HEAD
                const fullPath = join(CURRENT_DIR, destinationPath)
                req.filePath = fullPath;
                cb(null, fullPath);
            },

            filename: (req, file, cb) => {
                const fileExtension = extname(file.originalname);
                const fileName = file.originalname.split(fileExtension)[0];
                cb(null, `${fileName}-${Date.now()}${fileExtension}`)
            }
        }),

        fileFilter: (req, file, cb) => {
            if (MIMETYPES.includes(file.mimetypes)) cb(null);
            else cb(new Error(`Only ${MIMETYPES.join(" ")} mimetypes are allowed`));
        
        }
    });
}
=======
                const fullPath = join(CURRENT_DIR, destinationPath);
                req.filePath = fullPath; // Set the filePath on the request object
                cb(null, fullPath);
            },
            filename: (req, file, cb) => {
                const fileExtension = extname(file.originalname);
                const fileName = file.originalname.split(fileExtension)[0];
                cb(null, `${fileName}-${Date.now()}${fileExtension}`);
            }
        }),
        fileFilter: (req, file, cb) => {
            if (MIMETYPES.includes(file.mimetype)) cb(null, true);
            else cb(new Error(`Only ${MIMETYPES.join(" ")} mimetypes are allowed`));
        },
        limits: {
            fileSize: MAX_SIZE
        },
    });
};
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50

export const uploadProfilePicture = createMulterConfig("../public/uploads/profile-pictures");
export const uploadPetPicture = createMulterConfig("../public/uploads/pet-pictures");