import mongoose from 'mongoose';

const breedSchema = mongoose.Schema({
    id: String,
    breed: String
})

const BreedModel = mongoose.model('Breed', breedSchema)

export default BreedModel