import express from 'express';

import { getDogs, postDog, updateDog, deleteDog, boopDog } from '../controllers/dogs.js';

import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/',auth, getDogs);

router.post('/', auth, postDog);
router.patch('/:id', auth, updateDog);
router.delete('/:id', auth, deleteDog);
router.patch('/:id/boopDog', auth, boopDog)

export default router