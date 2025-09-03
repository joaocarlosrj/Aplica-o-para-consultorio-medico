import express from "express";
import pacientService from "../services/PacientService.js"; // default import

const router = express.Router(); // R maiúsculo

// GET /pacients - lista todos os pacientes
router.get('/pacients', async (req, res) => {
    try {
        const pacients = await pacientService.getAllPacient();
        res.status(200).json(pacients);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// GET /pacients/:id - busca paciente por ID
router.get('/pacients/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const pacient = await pacientService.getPacient(id);
        if (!pacient) return res.status(404).json({ message: "Pacient not found" });
        res.status(200).json(pacient);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// POST /pacients - cria um novo paciente
router.post('/pacients', async (req, res) => {
    const { name, birthdate, email, phone } = req.body;
    try {
        const pacient = await pacientService.savePacient({ name, birthdate, email, phone });
        res.status(201).json(pacient);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// PUT /pacients/:id - atualiza paciente existente
router.put('/pacients/:id', async (req, res) => {
    const { id } = req.params;
    const { name, birthdate, email, phone } = req.body;
    try {
        const pacient = await pacientService.updatePacient(id, { name, birthdate, email, phone });
        if (!pacient) return res.status(404).json({ message: "Pacient not found" });
        res.status(200).json(pacient);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// DELETE /pacients/:id - remove paciente
router.delete('/pacients/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await pacientService.deletePacient(id);
        if (!deleted) return res.status(404).json({ message: "Pacient not found" });
        res.status(200).json({ message: "Pacient deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

export default router;