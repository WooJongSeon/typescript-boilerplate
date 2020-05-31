import { Router } from 'express';
import api from './api';

const router = Router();

router.use('/api/v1', api);
router.use('/api/v2', api);


export default router;

