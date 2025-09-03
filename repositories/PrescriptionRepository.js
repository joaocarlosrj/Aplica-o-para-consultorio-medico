import { Prescription } from "..//models/Prescription";

const getAllPrescription = async () => {
    return await Prescription.find();
}

const getPrescription = async (id) => {
    return await Prescription.findBy(id);
}

const savePrescription = async (date, Appointment, Medicine, Dosage, Instructions) => {
    try {
        const appointment = new Prescription(date, Appointment, Medicine, Dosage, Instructions); 
        return await appointment.save();
    } catch (error) {
        throw new Error(error);
    }
}

const updatePrescription = async (id, {date, Appointment, Medicine, Dosage, Instructions}) => {
    try {
        return await Prescription.findByIdAndUpdate(id, {date, Appointment, Medicine, Dosage, Instructions}, {new : true})
    } catch (error) {
        throw new Error(error);
    }
}

const deletePrescription = async (id) => {
    try {
        return await Prescription.findByIdAndUpdate(id);
    } catch (error) {
        throw new Error(error);
    }
}


const PrescriptionRepository = {
    getAllPrescription,
    getPrescription,
    savePrescription,
    updatePrescription,
    deletePrescription
}

export default PrescriptionRepository;