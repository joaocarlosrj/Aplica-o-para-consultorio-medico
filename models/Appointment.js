import { mongoose } from "mongoose";

const schema = mongoose.schema;

const appointmentSchema = new schema( {
    Date: {
        type: Date,
        required: [true, 'Appointment Date is required']
    },
    doctorid: {
        type: String,
        required: [true, 'DoctorID is required']
    },

    pacientid: {
        type: String,
        required: [true, 'PacientID is required']
    },

    createdAt: {
        type: Date, 
        default: Date.now }
}
)

const appointment = mongoose.model('Appointment', appointmentSchema);
export default appointment;