import { Int32 } from "bson"
import mongoose from "mongoose"

const AllUsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true
    },
    img: {
        type: String,
    }

})

export default mongoose.model('user', AllUsersSchema)