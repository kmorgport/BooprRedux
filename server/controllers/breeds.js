import mongoose from 'mongoose';
import BreedModel from '../models/breedModel';

export const getBreeds = async (req, res)=>{
    try{

        const breeds = await BreedModel.find();
        res.json({ data: breeds})
    }catch ( error){
        res.status(404).json({ message: error.message })
    }
}