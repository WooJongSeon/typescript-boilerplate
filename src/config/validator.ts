import { query, body, param, validationResult } from 'express-validator/check'
import { NextFunction, Request, Response } from 'express';
import { BAD_REQUEST, UNAUTHORIZED } from 'http-status-codes';

export const validateCreateQuotation = [
  body('rfqId').exists().isNumeric(),
  body('userId').exists().isNumeric(),
  body('partnerId').exists().isNumeric(),
  body('requiredSchedule').exists().isNumeric(),
  body('unitPrices').isArray(),
  body('unitPrices.*.drawingItemId').exists(),
  body('unitPrices.*.price').exists(),
  body('detailDescription').isString()
]
export const validateIdParam = [
  param('id').isNumeric(),
]

export const validationHandler = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(BAD_REQUEST).json({ errors: errors.array() });
  } else {
    next();
  }
}
