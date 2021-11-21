import express from 'express';

import { getDogs, postDog} from '../controllers/dogs.js';

const router = express.Router();

router.get('/', getDogs);
router.post('/', postDog);

export default router