import asyncHandler from 'express-async-handler';


const authUser = asyncHandler(async(req,res) =>{

    res.status(200).json({message:'Auth User'})
})

const registerUser = asyncHandler(async(req,res) =>{

    res.status(200).json({message:' User registered'})
})

const logoutUser = asyncHandler(async(req,res) =>{

    res.status(200).json({message:'User logout'})
})




export {
    authUser,
    registerUser,
    logoutUser
}