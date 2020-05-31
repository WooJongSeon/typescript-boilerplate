import { Request, Response } from 'express';
import RequestHandler from '../../utils/requestHandler';
import Logger from '../../utils/logger';
import { CREATED, UNPROCESSABLE_ENTITY, OK } from 'http-status-codes';
import QuotationService from './userService';

const logger = new Logger();
const requestHandler = new RequestHandler(logger);

class UserController {
  public static async create(req: Request, res: Response) {
    try {
      const data = req.body;
      data.id = '';
      const createQuotation = await QuotationService.create(data);
      if (createQuotation.status === CREATED) {
        return requestHandler.sendSuccess(req, res, CREATED, 'user created', createQuotation.data);
      } else {
        return requestHandler.throwError(res, UNPROCESSABLE_ENTITY, 'Unprocessable Entity');
      }
    } catch (error) {
      return requestHandler.sendError(req, res, error);
    }
  }

  public static async getUserList(req: Request, res: Response) {
    try {
      const {
        offset,
        limit,
      } = req.query;
      const quotationList = await QuotationService.getList(offset, limit);
      if (quotationList.status === OK) {
        return requestHandler.sendSuccess(req, res, 200, 'user list', quotationList.data);
      }
    } catch (error) {
      return requestHandler.sendError(req, res, error);
    }
  }

  public static async getUser(req: Request, res: Response) {
    try {
      const quotationId = req.params.id;

      const quotation = await QuotationService.get(quotationId);
      if (quotation.status === OK) {
        return requestHandler.sendSuccess(req, res, OK, 'user info', quotation.data);
      } else {
        return requestHandler.throwError(res, quotation.status, quotation.data);
      }
    } catch (error) {
      return requestHandler.sendError(req, res, error);
    }
  }
}

export default UserController;
