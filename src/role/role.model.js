<<<<<<< HEAD
import mongoose from "mongoose";
=======
import mongoose from 'mongoose';
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50

const RoleSchema = mongoose.Schema({
    role: {
        type: String,
        required: [true, 'El rol es obligatorio']
    }
<<<<<<< HEAD
})
=======
});
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50

export default mongoose.model('Role', RoleSchema);