import asyncHandler from 'express-async-handler';
import {registerHelper } from '../helper/userHelper.js';
import generateToken from '../utils/generateToken.js';
import User from "../models/userModel.js";

//When user login
const authUser = asyncHandler(async(req,res) =>{
  const {email,password}= req.body;

  const user = await User.findOne({email});

  if(user && (await user.matchPassword(password))){
      generateToken(res,user._id)
      const responseData = {
          _id: user._id,
          name: user.name,
          email: user.email
      };

        if (user.imagePath) {
          responseData.imagePath = user.imagePath;
      }

      res.status(201).json(responseData);
  }else{
      res.status(400);
      throw new Error('invalid email or password')
  }
 
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