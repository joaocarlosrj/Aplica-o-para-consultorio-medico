import { express } from "express";
import { DoctorService } from "../services/DoctorService";

let router = express.router();

router.get('./Doctor', async(req, res) => {
    try{ 
    const Doctor = await DoctorService.getAllDoctor();
        res.send(Doctor)
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});

router.get('./getDoctor/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const Doctor = await DoctorService.getDoctor(id);
        res.send(Doctor)
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});

router.post('./postDoctor/:id', async(req, res) => {
    const {name, login, password, medicalspecialty, medicalRegistration, email, phone} = req.params;
    try {
        const Doctor = await DoctorService.saveDoctor({name, login, password, medicalspecialty, medicalRegistration, email, phone});
        res.send(Doctor)
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});

router.put('./Doctors/:id', async(req, res) => {
    const {id} = req.params;
    const {name, login, password, medicalspecialty, medicalRegistration, email, phone} = req.body;
    try {
        const Doctor = await DoctorService.updateDoctor(id, {name, login, password, medicalspecialty, medicalRegistration, email, phone});
        res.send(Doctor)
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});

router.put('./Doctors/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const Doctor = await DoctorService.deleteDoctor(id);
        res.send(Doctor)
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});
export default router();