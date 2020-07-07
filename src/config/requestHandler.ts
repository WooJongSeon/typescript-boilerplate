import { Request, Response } from 'express';

import Logger from './logger';

class RequestHandler {
  private logger: Logger;
  constructor(logger: Logger) {
    this.logger = logger;
  }
  sendResponse(req: Request, res: Response, status: number, data: any) {
    this.logger.log(`a request has been made and processed successfully at: ${new Date()}`, 'info', {});
    return res.status(status).json(data);
  }
  sendError(res: Response, status: number, error: any) {
    return res.status(status).json(error);
  }
  serverError(req: Request, res: Response, error: any) {
    this.logger.log(`error ,Error during processing request: ${`${req.protocol}://${req.get('host')}${req.originalUrl}`} details message: ${error.message}`, 'error', {});
    return res.status(error.status || 500).json(error);
  }
}

export default RequestHandler;
