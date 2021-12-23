import express from 'express';
import { signIn, signUp, googleSignIn } from '../controllers/users.js'

const router = express.Router();

router.post('/signin', signIn);
router.post('/signup', signUp)
router.post('/googleSignIn', googleSignIn)

export default router