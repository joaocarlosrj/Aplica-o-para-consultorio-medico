import  PrescriptionRepository  from "../repositories/PrescriptionRepository.js";

const getAllPrescription = async () => {
    return await PrescriptionRepository;
} 

const getPrescription = async (id) => {
    return await PrescriptionRepository.getPrescription(id);
}

const savePrescription = async ({date, Appointment, Medicine, Dosage, Instructions}) => {
    return await PrescriptionRepository.savePrescription({date, Appointment, Medicine, Dosage, Instructions});
}

const updatePrescription = async (id, {date, Appointment, Medicine, Dosage, Instructions}) => {
    return await PrescriptionRepository.updatePrescription(id, {date, Appointment, Medicine, Dosage, Instructions});
}

const deletePrescription = async (id) => {
    return await PrescriptionRepository.deletePrescription(id);
}

const prescriptionServices = {

}

export default prescriptionServices;