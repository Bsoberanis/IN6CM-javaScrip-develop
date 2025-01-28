import mongosee from 'mongoose';
const userSchema = new mongosee.Schema({
    nombre:{
        type: String,
        required:[true, "El nombre es requerido"],
    },
    correo:{
        type: String,
        required:[true, "El correo es requerido"],
        unique:true,
    },
    password:{
        type: String,
        required:[true, "La contraseña es requerida"],
    },
    img:{
        type: String,
    },
 
    phone:{
        type: String,
        minLenght: 8,
        maxLength: 8,
        required: true,
    },
 
    estado: {
        type: Boolean,
        default: true,
    },
 
    google:{
    type: Boolean,
    default:false,
}
       
});
 
userSchema.methods.toJSON = function(){
    const { __v, password, ...user } = this.toObject();
    user.uid = _id;
    return usuario;
};
 
export default mongosee.model('User', userSchema);