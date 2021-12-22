import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    id: {
        type: String
    },
    packs: {
        type: [String]
    },
    pups:
    {
        type: [String]
    }
})

export default mongoose.model("User", userSchema)