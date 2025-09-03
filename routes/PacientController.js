import { express } from "express";
import { PacientService } from "../services/PacientService";

let router = express.router();

router.get('./Pacient', async(req, res) => {
    try {
        const Pacient = await PacientService.getAllPacient();
        res.send(Pacient)
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});

router.get('./getPacient/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const Pacient = await PacientService.getPacient(id);
        res.send(Pacient)
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});

router.post('./postPacient/:id', async(req, res) => {
    const {name, birthdate, email, phone} = req.params;
    try {
        const Pacient = await PacientService.savePacient({name, birthdate, email, phone});
        res.send(Pacient)
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});

router.put('./Pacients/:id', async(req, res) => {
    const {id} = req.params;
    const {name, birthdate, email, phone} = req.body;
    try {
        const Pacient = await PacientService.updatePacient(id, {name, birthdate, email, phone});
        res.send(Pacient)
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});

router.put('./Pacients/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const Pacient = await PacientService.deletePacient(id);
        res.send(Pacient)
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});

export default router();