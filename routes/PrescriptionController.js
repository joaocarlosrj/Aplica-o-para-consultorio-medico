import { express } from "express";
import { PrescriptionService } from "../services/PrescriptionService";

router.get('./Prescription', async(req, res) => {
    try{ 
    const Prescription = await PrescriptionService.getAllPrescription();
        res.send(Prescription)
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});

router.get('./getPrescription/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const Prescription = await PrescriptionService.getPrescription(id);
        res.send(Prescription)
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});

router.post('./postPrescription/:id', async(req, res) => {
    const {date, Prescription, Medicine, Dosage, Instructions} = req.params;
    try {
        const Prescription = await PrescriptionService.savePrescription({date, Prescription, Medicine, Dosage, Instructions});
        res.send(Prescription)
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});

router.put('./Prescriptions/:id', async(req, res) => {
    const {id} = req.params;
    const {date, Prescription, Medicine, Dosage, Instructions} = req.body;
    try {
        const Prescription = await PrescriptionService.updatePrescription(id, {date, Prescription, Medicine, Dosage, Instructions});
        res.send(Prescription)
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});

router.put('./Prescriptions/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const Prescription = await PrescriptionService.deletePrescription(id);
        res.send(Prescription)
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});

let router = express.router();

export default router();