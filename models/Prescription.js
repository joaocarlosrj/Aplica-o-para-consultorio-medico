import { mongoose } from "mongoose";

const schema = mongoose.schema;

const prescriptionSchema = new schema( {
    Date: {
        type: Date,
        required: [true, 'prescription Date is required']
    },

    appointment: {
        type: String,
       required: [true, 'appointment is required'] 
    },
    
    medicine: {
        type: String,
        required: [true, 'Medicine is required']
    },

    dosage: {
        type: String,
        required: [true, 'Dosage is required']
    },

    instructions:{
        type: String,
        required: [true, 'Instructions are required']
    },

    createdAt: {
        type: Date, 
        default: Date.now }
}
)

const prescription = mongoose.model('prescription', prescriptionSchema);
export default prescription;