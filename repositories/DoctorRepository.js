import { doctor } from "../models/Doctor.js";

const getAlldoctor = async () => {
    return await doctor.find();
}

const getDoctor = async (id) => {
    try {
        return await doctor.findById(id);
    } catch (error) {
        throw new Error(error)
    }
} 

const saveDoctor = async (name, login, password, medicalspecialty, medicalRegistration, email, phone) => {
    try {
        const doctor = new doctor (name, login, password, medicalspecialty, medicalRegistration, email, phone);
        return await doctor.save();
    } catch (error) {
        throw new Error(error)
    }
}

const updateDoctor = async () => {
    try {
        return await doctor.findByIdAndUpdate(id,{login, password, medicalspecialty, medicalRegistration, email, phone}, {new: true});
    } catch (error) {
        throw new Error(error);
    }
} 

const deleteDoctor = async (id) => {
    try {
        return await doctor.findByIdAndUpdate(id)
    } catch (error) {
        throw new Error(error);
    }
}

const doctorRepository = {
    getAlldoctor,
    getDoctor,
    saveDoctor,
    updateDoctor,
    deleteDoctor
}

export default doctorRepository;
