import asyncHandler from "express-async-handler";
import Admin from "../models/adminModel.js";
import Product from "../models/productModel.js";
import generateTokenAdmin from "../utils/generateTokenAdmin.js";


//Admin login
const authAdmin = asyncHandler( async(req,res)=>{
    const {email,password}= req.body;

    const admin = await Admin.findOne({email});

    if(admin && (await admin.matchPaswword(password))){
        generateTokenAdmin(res,admin._id)
        res.status(201).json({
            _id:admin._id,
            name:admin.name,
            email:admin.email
        })
    }else{
        res.status(400);
        throw new Error('invalid email or password')
    }


});


//Register Admin

const registerAdmin = asyncHandler( async(req,res)=>{
    const {name,email,password,key} = req.body

    const adminExist = await Admin.findOne({email});

    if(adminExist){
        res.status(400);
        throw new Error('Admin already exisit')
    }
    console.log(key,'keyyyyyyyyyy')
    if(key!== process.env.ADMIN_KEY){
        res.status(401);
        throw new Error('Invalid Key')
    }

    const admin = await Admin.create({
        name,
        email,
        password
    })

    

    if(admin){
        generateTokenAdmin(res,admin._id)
        res.status(201).json({
            _id:admin._id,
            name:admin.name,
            email:admin.email
        })
    }else{
        res.status(400);
        throw new Error('invalid admin data')
    }
    
});


// Loggin out admin

const logoutAdmin = asyncHandler( async(req,res)=>{
    res.cookie('adminJwt','',{
        httpOnly:true,
        expires:new Date(0)
    })
    res.status(200).json({message:"Logged out"})
});


// Adding product

const addProduct = asyncHandler(async (req, res) => {
    const { name, category, description, price } = req.body;
    
    
    const productImage = req.file ? req.file.filename : null;
    
    // Create a new Product instance
    const newProduct = new Product({
        name,
        category,
        image: productImage, 
        price,
        description,
    });
    
    try {
        // Save the new product to the database
        const savedProduct = await newProduct.save();
    
        // Respond with the saved product details
        res.status(201).json(savedProduct);
    } catch (error) {
        // Handle any errors that occur during database interaction
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Unlist Products

const unlistProduct = asyncHandler(async (req, res) => {
    const productId = req.params.productId;
  
    try {
      // Find the product by ID and update the unlist field to true
      const product = await Product.findByIdAndUpdate(
        productId,
        { $set: { unlist: true } },
        { new: true }
      );
  
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      res.status(200).json({ message: 'Product unlisted successfully', product });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Listing Products
const listProduct = asyncHandler(async (req, res) => {
    const productId = req.params.productId;
  
    try {
      // Find the product by ID and update the unlist field to true
      const product = await Product.findByIdAndUpdate(
        productId,
        { $set: { unlist: false } },
        { new: true }
      );
  
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      res.status(200).json({ message: 'Product listed successfully', product });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

  
    


export {
    authAdmin,
    registerAdmin,
    logoutAdmin,
    addProduct,
    unlistProduct,
    listProduct
}



