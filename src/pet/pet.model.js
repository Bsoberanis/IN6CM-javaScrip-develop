<<<<<<< HEAD
<<<<<<< HEAD
import { Schema, model } from 'mongoose';

const PetSchema = Schema({
=======
import { Schema, model } from "mongoose";

const petSchema = new Schema({
>>>>>>> 91215ea (PMA terminado)
=======
import { Schema, model } from "mongoose";

const petSchema = new Schema({
>>>>>>> b7dfb84 (PMA terminado)
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        uppercase: true,
        required: true
    },
    keeper: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    status: {
        type: Boolean,
        default: true
<<<<<<< HEAD
<<<<<<< HEAD
    }
=======
    },
>>>>>>> 91215ea (PMA terminado)
=======
    },
>>>>>>> b7dfb84 (PMA terminado)
}, {
    timestamps: true,
    versionKey: false
});

<<<<<<< HEAD
<<<<<<< HEAD
export default model('Pet', PetSchema);

=======
export default model('Pet', petSchema);
>>>>>>> 91215ea (PMA terminado)
=======
export default model('Pet', petSchema);
>>>>>>> b7dfb84 (PMA terminado)
