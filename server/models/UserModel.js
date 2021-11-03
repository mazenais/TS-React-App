import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name: {type: String},
    email: {
        type: String,
        required: true,
        unique: true,
        // trim: true, //no spaces,
        minlength: 3
    },
    age: {
        type: String,
        // required: true
    },
    password: {
        type: String,
        required: true
    }, 
   

});

export default mongoose.model('user', UserSchema);