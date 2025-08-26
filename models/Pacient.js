import { mongoose } from "mongoose";

const schema = mongoose.schema;

const pacientSchema = new schema( {

    pacientid: {
        type: String,
        required: [true, 'PacientID is required']
    },

    name: {
        type: String,
        required: [true, 'Name is required']
    },

    birthdate: {
        type: Date,
        required: [true, 'Birthdate is required'],
        unique: true
    },
    email: {
        type: String,
        required: [ true, 'E-mail is required']
    },

    phone: {
        type: String,
        required: [true, 'Phone is required']
    },

    createdAt: {
        type: Date, 
        default: Date.now }
}
)

const appointment = mongoose.model('pacient', pacientSchema);
export default pacient;