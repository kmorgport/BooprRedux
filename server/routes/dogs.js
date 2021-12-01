import express from 'express';

import { getDogs, postDog } from '../controllers/dogs.js';

import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/',auth, getDogs);
router.post('/', auth, postDog);

export default router