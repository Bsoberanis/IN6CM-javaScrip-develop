import { Router } from "express";
import { actualizarCitas, cancelarCitas, getCitas, saveAppointment } from "./appointment.controller.js";
import { actualizarCitasValidator, createAppointmentValidator } from "../middlewares/appointment-validators.js";

const router = Router();
//CREAR CITAS
router.post("/createAppointment", createAppointmentValidator, saveAppointment);
//LISTAR CITAS
//http://127.0.0.1:3001/adoptionSystem/v1/appointment/listarCitas
router.get("/listarCitas", getCitas)
//RECHAZAR CITAS
//http://127.0.0.1:3001/adoptionSystem/v1/appointment/cancelarCita/IDMONGO
router.put("/cancelarCita/:uid", cancelarCitas)
//ACTUALIZAR CITAS
http://127.0.0.1:3001/adoptionSystem/v1/appointment/actualizarCitas/IDMONGO
router.put(
    "/actualizarCitas/:uid",
    actualizarCitasValidator,
    actualizarCitas
)
export default router;