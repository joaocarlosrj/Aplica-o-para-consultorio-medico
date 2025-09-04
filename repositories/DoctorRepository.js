import Doctor from "../models/Doctor.js";

// 🔹 Busca todos os doctors
const getAllDoctors = async () => {
    try {
        return await Doctor.find();
    } catch (error) {
        throw new Error("Erro ao buscar todos os doctors: " + error.message);
    }
};

// 🔹 Busca doctor por ID
const getDoctorById = async (id) => {
    try {
        return await Doctor.findById(id);
    } catch (error) {
        throw new Error("Erro ao buscar doctor por ID: " + error.message);
    }
};

// 🔹 Salva um novo doctor
const saveDoctor = async (doctorData) => {
    try {
        const newDoctor = new Doctor(doctorData);
        return await newDoctor.save();
    } catch (error) {
        throw new Error("Erro ao salvar doctor: " + error.message);
    }
};

// 🔹 Atualiza um doctor existente
const updateDoctor = async (id, updateData) => {
    try {
        return await Doctor.findByIdAndUpdate(id, updateData, { new: true });
    } catch (error) {
        throw new Error("Erro ao atualizar doctor: " + error.message);
    }
};

// 🔹 Deleta um doctor
const deleteDoctor = async (id) => {
    try {
        return await Doctor.findByIdAndDelete(id);
    } catch (error) {
        throw new Error("Erro ao deletar doctor: " + error.message);
    }
};

// 🔹 Exporta o repository
const doctorRepository = {
    getAllDoctors,
    getDoctorById,
    saveDoctor,
    updateDoctor,
    deleteDoctor
};

export default doctorRepository;