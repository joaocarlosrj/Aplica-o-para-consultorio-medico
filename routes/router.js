import express from "express";
import appointmentController from "./AppointmentController.js";
import doctorController from "./DoctorController.js";
import pacientController from "./PacientController.js";
import prescriptionController from "./PrescriptionController.js";

const router = express.Router();

// Rota de teste
router.get("/", (req, res) => {
  console.log("API is running ");
  res.status(200).json({ message: "API is running " });
});

// Prefixo REST para cada controller
router.use("/appointments", appointmentController);
router.use("/doctors", doctorController);
router.use("/pacients", pacientController);
router.use("/prescriptions", prescriptionController);

export default router;