import { Router } from 'express';
import UserController from './userController';
import { validateCreateQuotation, validateIdParam, validationHandler } from '../../utils/validator';

const router = Router();

router.post('/',
  ...validateCreateQuotation,
  validationHandler,
  UserController.create);

router.get('/',
  UserController.getUserList);

router.get('/:id',
  ...validateIdParam,
  validationHandler,
  UserController.getUser);

export default router;
