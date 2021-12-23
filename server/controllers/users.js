import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signIn = async (req, res) => {
    const {email, password } = req.body;

    try{

        const existingUser = await User.findOne({email});
        if(!existingUser) return res.status(404).json({message: "User does not exist!"});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if(!isPasswordCorrect) return res.status(404).json({message:"Invalid Credentials!"});

        const token = jwt.sign({
            email: existingUser.email,
            id: existingUser._id,
            userName: existingUser.userName
        }, 'test', {expiresIn: '1h'});

        res.status(200).json({result: existingUser, token});

    }catch(error){
        res.status(500).json({message: "Something went wrong"});
    }
}

export const signUp = async (req, res ) => {
    const { email, password, confirmPassword, firstName, lastName, userName } = req.body;

    try{
        const existingUser = await User.findOne({email});
        const existingUserName = await User.findOne({userName});

        if(existingUser) return res.status(400).json({message: "User already exists!"});

        if(existingUserName) return res.status(400).json({message: "Username already selected!"});

        if(password !== confirmPassword) return res.status(400).json({message: "Passwords must match!"});

        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await User.create({
            email,
            password: hashedPassword,
            name: `${firstName} ${lastName}`,
            userName
        });
        const token = jwt.sign({
            email: result.email,
            id: result._id,
            userName: result.userName
        }, "test", {expiresIn: '1h'})
        res.status(200).json({result, token})
        
    }catch(error){
        res.status(500).json({message: "Something went wrong"})
    }
}

export const googleSignIn = (req, res) => {
    
}