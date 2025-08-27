import appointmentRepository, { AppointmentRepository } from "../repositories/AppointmentRepository";

const getAllAppointments = async () => {
    return await AppointmentRepository;
}

const getAppointment = async(id) => {
    return AppointmentRepository.getAppointment(id);
}

const saveAppointment = async ({date, doctorId, pacientId}) => {
    return AppointmentRepository.saveAppointment({date, doctorId, pacientId});
}

const updateAppointment = async (id, {date, doctorId, pacientId}) => {
    return appointmentRepository.updateAppointment(id, {date, doctorId, pacientId})
}

const deleteAppointment = async (id) => {
    return appointmentRepository.deleteAppointment(id);
}

const appointmentServices = {
    getAllAppointments,
    getAppointment,
    saveAppointment,
    updateAppointment,
    deleteAppointment
}

export default appointmentServices;