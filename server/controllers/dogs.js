import mongoose from 'mongoose';
import DogModel from '../models/dogModel.js'

export const getDogs = async (req, res) => {
    try{
    
        const dogs = await DogModel.find();
        console.log(dogs);

        res.status(200).json(dogs);

    }catch(error){
        res.status(404).json({ message: error.message })
    }
}