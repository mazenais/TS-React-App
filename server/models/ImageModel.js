import mongoose from "mongoose"

const ImageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }

});

export default mongoose.model('image', ImageSchema);