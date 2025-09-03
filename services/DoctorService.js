import  DoctorRepository  from "../repositories/DoctorRepository.js";

const getAlldoctor = async () => {
    return await DoctorRepository;
}

const getDoctor = async (id) => {
    return await doctorRepository.getAlldoctor(id);
}

const saveDoctor = async ({name, login, password, medicalspecialty, medicalRegistration, email, phone}) => {
    return await doctorRepository.saveDoctor({name, login, password, medicalspecialty, medicalRegistration, email, phone})
}
 
const updateDoctor = async (id, {name, login, password, medicalspecialty, medicalRegistration, email, phone}) => {
    return await doctorRepository.updateDoctor(id, {name, login, password, medicalspecialty, medicalRegistration, email, phone})
}

const deleteDoctor = async (id) => {
    return await DoctorRepository.deleteDoctor(id);
}


const doctorServices = {
    getAlldoctor,
    getDoctor,
    saveDoctor,
    updateDoctor,
    deleteDoctor
}

export default doctorServices;