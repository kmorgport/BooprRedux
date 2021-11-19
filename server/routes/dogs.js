import express from 'express';

import { getDogs} from '../controllers/dogs.js';

const router = express.Router();

router.get('/', getDogs)

export default router