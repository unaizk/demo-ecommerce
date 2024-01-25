import asyncHandler from 'express-async-handler';
import { registerHelper } from '../userHelper/registerHelper.js';
import generateToken from '../utils/generateToken.js';


const authUser = asyncHandler(async(req,res) =>{

    res.status(200).json({message:'Auth User'})
})


// When user Register
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
  
    const result = await registerHelper(name, email, password);
  
    if (result.success) {
      const userId = result.data._id
      generateToken(res,userId)
      res.status(201).json({
        _id: result.data._id,
        name: result.data.name,
        email: result.data.email,
      });
    } else {
      res.status(400).json({ error: result.error || 'Invalid data' });
    }
  });
  

const logoutUser = asyncHandler(async(req,res) =>{

    res.status(200).json({message:'User logout'})
})




export {
    authUser,
    registerUser,
    logoutUser
}