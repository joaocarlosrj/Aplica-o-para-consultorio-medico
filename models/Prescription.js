import mongoose from "mongoose";

const prescriptionSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: [true, 'Prescription Date is required']
    },
    appointment: {
        type: String,
        required: [true, 'Appointment is required']
    },
    medicine: {
        type: String,
        required: [true, 'Medicine is required']
    },
    dosage: {
        type: String,
        required: [true, 'Dosage is required']
    },
    instructions: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Prescription = mongoose.model('Prescription', prescriptionSchema);
export default Prescription;