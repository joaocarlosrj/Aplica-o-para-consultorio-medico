import { PacientRepository } from "../repositories/PacientRepository";

const getAllPacient = async () => {
    return await PacientRepository;
} 

const getPacient = async (id) => {
    return await PacientRepository.getPacient(id);
}

const savePacient = async ({name, birthdate, email, phone}) => {
    return await PacientRepository.savePacient({name, birthdate, email, phone});
}

const updatePacient = async (id, {name, birthdate, email, phone}) => {
    return await PacientRepository.updatePacient(id, {name, birthdate, email, phone});
}

const deletePacient = async (id) => {
    return await PacientRepository.deletePacient(id);
}

const pacientServices = {
    getAllPacient,
    getPacient,
    savePacient,
    updatePacient,
    deletePacient
}

export default pacientServices;