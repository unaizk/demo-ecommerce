import express from 'express';
const router = express.Router();

import { authUser, registerUser, logoutUser, getUserProfile, getListedProducts } from '../controller/userController.js';
import { protect } from '../middleware/authMiddleware.js';

router.post('/',registerUser)
router.post('/auth', authUser)
router.post('/logout',logoutUser)
router.get('/profile',protect, getUserProfile);
router.get('/listed-products',protect,getListedProducts)


export default router;