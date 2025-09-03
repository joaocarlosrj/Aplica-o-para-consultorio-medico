import mongoose from "mongoose";

const pacientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    birthdate: {
        type: Date,
        required: [true, 'Birthdate is required']
    },
    email: {
        type: String,
        required: [true, 'E-mail is required']
    },
    phone: {
        type: String,
        required: [true, 'Phone is required']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Pacient = mongoose.model('Pacient', pacientSchema);
export default Pacient;