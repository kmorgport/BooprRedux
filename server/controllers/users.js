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

export const googleSignIn = async (req, res) => {
    //need to rectify password necessity if user is signing in with Google Auth
    //create random number
    const randomNumbGen = (max, min) =>{
        return Math.floor(Math.random()*(max - min)+min)
    }
    //pull googleSignIn info
    const { email, familyName, givenName, googleId } = req.body.profileObj;
    //creates random number string 
    const hashedPassword = await bcrypt.hash(googleId, 12);
    const randomPackGen = parseInt(`${randomNumbGen(10,1)}0${randomNumbGen(10,1)}0${randomNumbGen(10,1)}0${randomNumbGen(10,1)}`)
    try{
        const existingUser = await User.findOne({email});
        if(!existingUser){
            const result = await User.create({
                password: hashedPassword,
                email: email,
                name: `${givenName} ${familyName}`,
                //build placeholder (hopefully non duplicate) packleader UserName
                userName: `PackLeader_${randomPackGen}`
            })
            const token = jwt.sign({
                email: result.email,
                id: result._id,
                userName: result.userName
            }, "test", {expiresIn: '1h'})
            res.status(200).json({result, token})
        }else if( existingUser){
            const token = jwt.sign({
                email: existingUser.email,
                id: existingUser._id,
                userName: existingUser.userName
            }, 'test', {expiresIn: '1h'});
            res.status(200).json({result: existingUser, token});
        }

    }catch( error){
        console.log(error)
    }
}