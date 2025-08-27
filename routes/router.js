import { express } from "express";
import { appointmentController } from "./AppointmentController";
import { doctorController } from "./DoctorController";
import { pacientcontroller } from "./PacientController";
import { prescriptionController } from "./PrescriptionController";

const router = express.router();

router.get(
    "/", function(req, res){
        console.log("Hi")
        res. status(200).json({message: "Hi"})
    }
);

router.use("/", appointmentController);
router.use("/", doctorController);
router.use("/", pacientcontroller);
router.use("/", prescriptionController);

export default router;
