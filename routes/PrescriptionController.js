import express from "express";
import prescriptionService from "../services/PrescriptionService.js"; // default import

const router = express.Router(); // R maiúsculo e declarado antes das rotas

// GET /prescriptions - lista todas as prescrições
router.get('/prescriptions', async (req, res) => {
    try { 
        const prescriptions = await prescriptionService.getAllPrescription();
        res.status(200).json(prescriptions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// GET /prescriptions/:id - busca prescrição por ID
router.get('/prescriptions/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const prescription = await prescriptionService.getPrescription(id);
        if (!prescription) return res.status(404).json({ message: "Prescription not found" });
        res.status(200).json(prescription);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// POST /prescriptions - cria uma nova prescrição
router.post('/prescriptions', async (req, res) => {
    const { date, appointment, medicine, dosage, instructions } = req.body;
    try {
        const prescription = await prescriptionService.savePrescription({ date, appointment, medicine, dosage, instructions });
        res.status(201).json(prescription);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// PUT /prescriptions/:id - atualiza prescrição existente
router.put('/prescriptions/:id', async (req, res) => {
    const { id } = req.params;
    const { date, appointment, medicine, dosage, instructions } = req.body;
    try {
        const prescription = await prescriptionService.updatePrescription(id, { date, appointment, medicine, dosage, instructions });
        if (!prescription) return res.status(404).json({ message: "Prescription not found" });
        res.status(200).json(prescription);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// DELETE /prescriptions/:id - remove prescrição
router.delete('/prescriptions/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await prescriptionService.deletePrescription(id);
        if (!deleted) return res.status(404).json({ message: "Prescription not found" });
        res.status(200).json({ message: "Prescription deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

export default router;