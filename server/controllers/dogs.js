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
    console.log(dog)

    try{

        await newDog.save();
        
        res.status(202).json(newDog);

    }catch (error){
        res.status(409).json({ message: error.message})
    }
}

export const updateDog = async ( req, res, next ) => {
    const { id } = req.params;
    const {name, bio, sex, owner } = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with ID");

    const updatedDog = { name, bio, sex, owner, _id: id}; 

    await DogModel.findByIdAndUpdate(id, updatedDog, {new:true})

    res.json(updatedDog)

}

export const deleteDog = async (req, res)=>{
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No posts with id: ${id}`);
    
    await DogModel.findByIdAndDelete(id);

    res.json({ message: "Post deleted successfully"});
}

export const boopDog = async (req, res)=>{
    const { id } = req.params;

    if(!req.userId ){
        return res.json({ message: "Unauthenticated "});
    }
    
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const dog = await DogModel.findById(id);

    const index = dog.boops.findIndex((id)=> id === String(req.userId));

    if( index ===-1){
        dog.boops.push(req.userId);
    }else {
        dog.boops = dog.boops.filter((id)=> id !== String(req.userId));
    }

    const updatedDog = await DogModel.findByIdAndUpdate(id, dog, { new: true});

    res.status(200).json(updatedDog);
}