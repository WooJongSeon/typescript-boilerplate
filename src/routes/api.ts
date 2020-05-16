import { Router } from 'express';
import userAPI from '../components/user/userAPI';

const router = Router();

router.use('/user', userAPI);


export default router;
