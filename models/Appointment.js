import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    Date: {
        type: Date,
        required: [true, 'Appointment Date is required']
    },
    doctorId: {
        type: String,
        required: [true, 'DoctorID is required']
    },
    pacientId: {
        type: String,
        required: [true, 'PacientID is required']
    },
    createdAt: {
        type: Date, 
        default: Date.now
    }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
export default Appointment;
