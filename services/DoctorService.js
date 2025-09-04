import doctorRepository from "../repositories/DoctorRepository.js";

const getAllDoctors = async () => {
    return await doctorRepository.getAllDoctors();
};

const getDoctor = async (id) => {
    return await doctorRepository.getDoctorById(id);
};

const saveDoctor = async (doctorData) => {
    return await doctorRepository.saveDoctor(doctorData);
};

const updateDoctor = async (id, updateData) => {
    return await doctorRepository.updateDoctor(id, updateData);
};

const deleteDoctor = async (id) => {
    return await doctorRepository.deleteDoctor(id);
};

export default {
    getAllDoctors,
    getDoctor,
    saveDoctor,
    updateDoctor,
    deleteDoctor
};