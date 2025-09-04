import express from "express";
import bcrypt from "bcrypt";
import doctorService from "../services/DoctorService.js";

const router = express.Router();

// ✅ GET /doctors - lista todos os doctors
router.get("/", async (req, res) => {
    try {
        const doctors = await doctorService.getAllDoctors();
        res.status(200).json(doctors);
    } catch (error) {
        console.error("Erro em GET /doctors:", error);
        res.status(500).json({ error: error.message });
    }
});

// ✅ GET /doctors/:id - busca doctor por ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const doctor = await doctorService.getDoctor(id);
        if (!doctor) return res.status(404).json({ message: "Doctor not found" });
        res.status(200).json(doctor);
    } catch (error) {
        console.error("Erro em GET /doctors/:id:", error);
        res.status(500).json({ error: error.message });
    }
});

// ✅ POST /doctors - cria um novo doctor
router.post("/", async (req, res) => {
    const { name, login, password, medicalSpecialty, medicalRegistration, email, phone } = req.body;

    if (!password) return res.status(400).json({ error: "Password is required" });

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const doctor = await doctorService.saveDoctor({
            name,
            login,
            password: hashedPassword,
            medicalSpecialty,
            medicalRegistration,
            email,
            phone
        });
        res.status(201).json(doctor);
    } catch (error) {
        console.error("Erro em POST /doctors:", error);
        res.status(500).json({ error: error.message });
    }
});

// ✅ PUT /doctors/:id - atualiza um doctor existente
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, login, password, medicalSpecialty, medicalRegistration, email, phone } = req.body;

    try {
        const updateData = { name, login, medicalSpecialty, medicalRegistration, email, phone };
        if (password) updateData.password = await bcrypt.hash(password, 10);

        const doctor = await doctorService.updateDoctor(id, updateData);
        if (!doctor) return res.status(404).json({ message: "Doctor not found" });

        res.status(200).json(doctor);
    } catch (error) {
        console.error("Erro em PUT /doctors/:id:", error);
        res.status(500).json({ error: error.message });
    }
});

// ✅ DELETE /doctors/:id - remove um doctor
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await doctorService.deleteDoctor(id);
        if (!deleted) return res.status(404).json({ message: "Doctor not found" });
        res.status(200).json({ message: "Doctor deleted successfully" });
    } catch (error) {
        console.error("Erro em DELETE /doctors/:id:", error);
        res.status(500).json({ error: error.message });
    }
});

export default router;