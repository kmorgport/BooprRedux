import express from 'express';

import { getDogs, getDog, postDog, updateDog, deleteDog, boopDog, fetchDogsBySearch, fetchDogsByOwner } from '../controllers/dogs.js';

import auth from '../middleware/auth.js';

const router = express.Router();


router.get('/fetch',auth, fetchDogsBySearch)
router.get('/', auth, getDogs);
router.get('/:id',auth, getDog)
router.get('/owner/:id', auth, fetchDogsByOwner )


router.post('/', auth, postDog);
router.patch('/:id', auth, updateDog);
router.delete('/:id', auth, deleteDog);
router.patch('/:id/boopDog', auth, boopDog)

export default router