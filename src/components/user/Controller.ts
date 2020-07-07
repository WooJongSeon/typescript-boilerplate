import { Request, Response } from 'express';
import UserService from './Service';
import Logger from '../../config/logger';
import RequestHandler from '../../config/requestHandler';
import { OK } from 'http-status-codes';
import { ReqType } from './Middleware';
const logger = new Logger();
const requestHandler = new RequestHandler(logger);

class Controller {
  static async get(req: Request, res: Response) {
    try {
      if (req.headers.reqType === ReqType.One) {
        const id = req.params.id;
        const { status, data } = await UserService.findOne(id);
        if (status === OK) return requestHandler.sendResponse(req, res, OK, data);
        else requestHandler.sendError(res, status, data);
      } else {
        const id = req.params.id;
        const { status, data } = await UserService.findOne(id);
        if (status === OK) return requestHandler.sendResponse(req, res, OK, data);
        else requestHandler.sendError(res, status, data);
      }
    } catch (error) {
      return requestHandler.serverError(req, res, error);
    }
  }
  static async post(req: Request, res: Response) {
    try {
      if (req.headers.reqType === ReqType.One) {
        const id = req.params.id;
        const { status, data } = await UserService.findOne(id);
        if (status === OK) return requestHandler.sendResponse(req, res, OK, data);
        else requestHandler.sendError(res, status, data);
      } else {
        const id = req.params.id;
        const { status, data } = await UserService.findOne(id);
        if (status === OK) return requestHandler.sendResponse(req, res, OK, data);
        else requestHandler.sendError(res, status, data);
      }
    } catch (error) {
      return requestHandler.serverError(req, res, error);
    }
  }

  static async put(req: Request, res: Response) {
    try {
      if (req.headers.reqType === ReqType.One) {
        const id = req.params.id;
        const { status, data } = await UserService.findOne(id);
        if (status === OK) return requestHandler.sendResponse(req, res, OK, data);
        else requestHandler.sendError(res, status, data);
      } else {
        const id = req.params.id;
        const { status, data } = await UserService.findOne(id);
        if (status === OK) return requestHandler.sendResponse(req, res, OK, data);
        else requestHandler.sendError(res, status, data);
      }
    } catch (error) {
      return requestHandler.serverError(req, res, error);
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      if (req.headers.reqType === ReqType.One) {
        const id = req.params.id;
        const { status, data } = await UserService.findOne(id);
        if (status === OK) return requestHandler.sendResponse(req, res, OK, data);
        else requestHandler.sendError(res, status, data);
      } else {
        const id = req.params.id;
        const { status, data } = await UserService.findOne(id);
        if (status === OK) return requestHandler.sendResponse(req, res, OK, data);
        else requestHandler.sendError(res, status, data);
      }
    } catch (error) {
      return requestHandler.serverError(req, res, error);
    }
  }

  static async patch(req: Request, res: Response) {
    try {
      if (req.headers.reqType === ReqType.One) {
        const id = req.params.id;
        const { status, data } = await UserService.findOne(id);
        if (status === OK) return requestHandler.sendResponse(req, res, OK, data);
        else requestHandler.sendError(res, status, data);
      } else {
        const id = req.params.id;
        const { status, data } = await UserService.findOne(id);
        if (status === OK) return requestHandler.sendResponse(req, res, OK, data);
        else requestHandler.sendError(res, status, data);
      }
    } catch (error) {
      return requestHandler.serverError(req, res, error);
    }
  }
}
export default Controller;
