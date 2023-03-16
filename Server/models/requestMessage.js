import mongoose, { Mongoose } from "mongoose";

const requestSchema = mongoose.Schema({
    name: String,
    title: String,
    message: String,
    creator: String,
    tags: [String],
     createdAt: {
        type: Date,
        default: new Date()
     },
});

const requestMessage = mongoose.model('requestMessage', requestSchema);
export default requestMessage;