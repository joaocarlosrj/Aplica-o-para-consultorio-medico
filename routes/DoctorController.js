import express from "express";
import doctorService from "../services/DoctorService.js"; // default import, instancia da classe se necessário

const router = express.Router(); // R maiúsculo

// GET /doctors - lista todos os doctors
router.get('/doctors', async (req, res) => {
    try {
        const doctors = await doctorService.getAllDoctor();
        res.status(200).json(doctors);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// GET /doctors/:id - busca doctor por ID
router.get('/doctors/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const doctor = await doctorService.getDoctor(id);
        if (!doctor) return res.status(404).json({ message: "Doctor not found" });
        res.status(200).json(doctor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// POST /doctors - cria um novo doctor
router.post('/doctors', async (req, res) => {
    const { name, login, password, medicalspecialty, medicalRegistration, email, phone } = req.body;
    try {
        const doctor = await doctorService.saveDoctor({ name, login, password, medicalspecialty, medicalRegistration, email, phone });
        res.status(201).json(doctor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// PUT /doctors/:id - atualiza um doctor existente
router.put('/doctors/:id', async (req, res) => {
    const { id } = req.params;
    const { name, login, password, medicalspecialty, medicalRegistration, email, phone } = req.body;
    try {
        const doctor = await doctorService.updateDoctor(id, { name, login, password, medicalspecialty, medicalRegistration, email, phone });
        if (!doctor) return res.status(404).json({ message: "Doctor not found" });
        res.status(200).json(doctor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// DELETE /doctors/:id - remove um doctor
router.delete('/doctors/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await doctorService.deleteDoctor(id);
        if (!deleted) return res.status(404).json({ message: "Doctor not found" });
        res.status(200).json({ message: "Doctor deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

export default router;