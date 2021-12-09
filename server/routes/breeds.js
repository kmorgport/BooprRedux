import express from 'express';

import { getBreeds } from '../controllers/breeds.js'

import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getBreeds);

export default router