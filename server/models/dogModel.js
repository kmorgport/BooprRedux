import mongoose from 'mongoose';

const dogSchema = mongoose.Schema({
    id: String,
    name: String,
    bio: String,
    sex: String,
    owner: String,
    ownerName: String,
    pictures: [String],
    breeds:{
        type: [String],
        default: []
    },
    boops: {
        type: [String],
        default: []
    },
    dateAdded: {
        type: Date,
        default: new Date()
    },
    location: {
        type: [String],
        default: []
    }
})

const DogModel = mongoose.model('DogModel', dogSchema);

export default DogModel