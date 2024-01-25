import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';


const authUser = asyncHandler(async(req,res) =>{

    res.status(200).json({message:'Auth User'})
})

const registerUser = asyncHandler(async(req,res) =>{

    const {name, email, password} = req.body;

    const userExist = await User.findOne({email : email});

    if(userExist){
        res.status(400);
        throw new Error('User already exist')
    }

    const user = await User.create({
        name,email,password
    });

    if(user){
        res.status(201).json({
            _id : user._id,
            name : user.name,
            email : user.email
        })
    }else{
        res.status(400);
        throw new Error('Invalid data')
    }

})

const logoutUser = asyncHandler(async(req,res) =>{

    res.status(200).json({message:'User logout'})
})




export {
    authUser,
    registerUser,
    logoutUser
}