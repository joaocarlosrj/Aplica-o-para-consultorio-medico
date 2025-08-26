import mongoose, { Mongoose } from "mongoose";

mongoose.connect("0mongoDB: //localhost:27017/mediapp");

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

db.once(
    'open', function(){
        console.log('database conected successfully!')
    }
);

export default db;