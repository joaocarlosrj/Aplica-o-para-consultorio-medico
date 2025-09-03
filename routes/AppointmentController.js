import express from "express";
import appointmentService from "../services/AppointmentService.js"; // singular, default import

const router = express.Router();

// GET /appointments - lista todos os appointments
router.get('/appointments', async (req, res) => {
    try {
        const appointments = await appointmentService.getAllAppointment();
        res.status(200).json(appointments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// GET /appointments/:id - busca appointment por ID
router.get('/appointments/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const appointment = await appointmentService.getAppointment(id);
        if (!appointment) return res.status(404).json({ message: "Appointment not found" });
        res.status(200).json(appointment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// POST /appointments - cria um novo appointment
router.post('/appointments', async (req, res) => {
    const { date, doctorId, pacientId } = req.body;
    try {
        const appointment = await appointmentService.saveAppointment({ date, doctorId, pacientId });
        res.status(201).json(appointment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// PUT /appointments/:id - atualiza um appointment
router.put('/appointments/:id', async (req, res) => {
    const { id } = req.params;
    const { date, doctorId, pacientId } = req.body;
    try {
        const appointment = await appointmentService.updateAppointment(id, { date, doctorId, pacientId });
        if (!appointment) return res.status(404).json({ message: "Appointment not found" });
        res.status(200).json(appointment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// DELETE /appointments/:id - remove um appointment
router.delete('/appointments/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await appointmentService.deleteAppointment(id);
        if (!deleted) return res.status(404).json({ message: "Appointment not found" });
        res.status(200).json({ message: "Appointment deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

export default router;