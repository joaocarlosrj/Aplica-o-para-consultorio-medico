import  express  from "express";
import  appointmentController  from "./AppointmentController.js";
import  doctorController  from "./DoctorController.js";
import pacientcontroller  from "./PacientController.js";
import  prescriptionController  from "./PrescriptionController.js";

const router = express.Router();

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
