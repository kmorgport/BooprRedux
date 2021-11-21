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

export const postDog = async (req, res) => {
    const dog = req.body;

    const newDog = new DogModel(dog);

    try{

        await newDog.save();
        
        res.status(202).json(newDog);

    }catch (error){
        res.status(409).json({ message: error.message})
    }
}