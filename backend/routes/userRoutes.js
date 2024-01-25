import express from 'express';
const router = express.Router();

import { authUser, registerUser, logoutUser, getUserProfile } from '../controller/userController.js';
import { protect } from '../middleware/authMiddleware.js';

router.post('/',registerUser)
router.post('/auth', authUser)
router.post('/logout',logoutUser)
router.get('/profile',protect, getUserProfile)


export default router;