import { mongoose } from "mongoose";

const schema = mongoose.schema;

const DoctorSchema = new schema( {
    
    doctorid: {
        type: String,
        required: [true, 'DoctorID is required']
    },

    name: {
        type: String,
        required: [true, 'Doctor name is required']
    },

    login: {
        type: String,
        required: [true, 'login is required'],
        unique: true
    },

    password: {
      type: String,
       required: [true, 'Password is required'] 
    },

    medicalspecialty: {
       type: String,
       required: [true, 'Medical Specialty is required'] 
    },

    medicalRegistration: {
        type: String,
        required: [true, ' Medical Registration is required'],
        unique: true,
    },

    email: {
        type: String,
        required: [true, 'Email is required']
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

const appointment = mongoose.model('Doctor', DoctorSchema);
export default Doctor;