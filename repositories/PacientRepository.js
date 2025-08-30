import { pacient } from "..//models/Pacient";

const getAllAppointments = async () => {
    return await pacient.find();
}

const getPacient = async (id) => {
    try {
       return await pacient.findById(id) 
    } catch (error) {
        throw new Error(error);
    }
}

const savePacient = async (name, birthdate, email, phone) => {
    try {
        return await pacient.save();
    } catch (error) {
        throw new Error(error);
    }
}

const updatePacient = async (id, {name, birthdate, email, phone}) => {
    try {
        return await pacient.findByIdAndUpdate(id, {name, birthdate, email, phone}, {new: true})
    } catch (error) {
        throw new Error(error);
    }
}

const deletePacient = async (id) => {
    try {
        return await pacient.findByIdAndUpdate(id);
    } catch (error) {
        throw new Error(error);   
    }
}

const pacientRepository = {
    getAllAppointments, 
    getPacient,
    savePacient,
    updatePacient,
    deletePacient
}

export default pacientRepository;