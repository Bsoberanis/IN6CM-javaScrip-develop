<<<<<<< HEAD
import {Schema, model} from "mongoose";
=======
import { Schema, model } from "mongoose";
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50

const PetSchema = Schema({
    name: {
        type: String,
        required: true
    },
<<<<<<< HEAD
    description:{
        type : String,
        required : true,
    },
    age:{
        type : Number,
        required : true
    },
    type:{
=======
    description: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    type: {
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
        type: String,
        uppercase: true,
        required: true
    },
<<<<<<< HEAD
    keeper:{
=======
    keeper: {
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    status: {
        type: Boolean,
<<<<<<< HEAD
        default: true,
    }
},
    {
        timestamps: true,
        versionKey: false
    }
    
);

export default model('Pet',PetSchema);
=======
        default: true
    }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Pet', PetSchema);
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
