<<<<<<< HEAD
'use strict'
=======
'use strict';
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { dbConnection } from './mongo.js';
import limiter from '../src/middlewares/validar-cant-peticiones.js';
<<<<<<< HEAD
import authRoutes from '../src/auth/auth.routes.js';
import userRoutes from '../src/users/user.routes.js';
import petRoutes from '../src/pet/pet.routes.js';
import apptRoutes from '../src/appt/appt.routes.js';

const middlewares = (app)=>{
    app.use(express.urlencoded({extended:false}));
=======
import authRoutes from '../src/auth/auth.routes.js'
import userRoutes from '../src/users/user.routes.js'
import petRoutes from '../src/pet/pet.routes.js'

const middlewares = (app) => {
    app.use(express.urlencoded({ extended: false }));
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
    app.use(cors());
    app.use(express.json());
    app.use(helmet());
    app.use(morgan('dev'));
    app.use(limiter);
}

<<<<<<< HEAD
const routes = (app) =>{

    app.use('/adoptionSystem/v1/auth' , authRoutes)
    app.use('/adoptionSystem/v1/users', userRoutes)
    app.use('/adoptionSystem/v1/pets', petRoutes)
    app.use('/adoptionSystem/v1/appt', apptRoutes)
}

const conectarDB = async()=>{
    try {
        await dbConnection();
        console.log('Conexion a la base de datos exitosa');
    } catch (error) {
        console.error('Error conectando a la base de datos',error);
=======
const routes = (app) => {
    app.use("/adoptionSystem/v1/auth", authRoutes);
    app.use("/adoptionSystem/v1/users", userRoutes);
    app.use("/adoptionSystem/v1/pets", petRoutes);
}

const conectarDB = async () => {
    try{
        await dbConnection();
        console.log("Conexión a la base de datos exitosa");
    }catch(error){
        console.error('Error conectando a la base de datos', error);
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
        process.exit(1);
    }
}

<<<<<<< HEAD
export const initServer= async()=>{
    const app = express();
    const port = process.env.port || 3000;
=======
export const initServer = async () => {
    const app = express();
    const port = process.env.PORT || 3000;
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50

    try {
        middlewares(app);
        conectarDB();
        routes(app);
        app.listen(port);
<<<<<<< HEAD
        console.log(`Server running on port ${port}`)
    } catch (e) {
        console.log(`Server init failed: ${e}`)
=======
        console.log(`Server running on port: ${port}`);
    } catch (err) {
        console.log(`Server init failed: ${err}`);
>>>>>>> 6d17c82c46a7391ce40b773d51e6d5802d8edf50
    }
}