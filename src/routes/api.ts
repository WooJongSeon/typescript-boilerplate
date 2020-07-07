import { Router } from 'express';
import userAPI from '../components/user/API';
const router = Router();

router.use('/user', userAPI);


export default router;
