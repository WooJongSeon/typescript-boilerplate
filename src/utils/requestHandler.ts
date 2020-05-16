import { Request, Response } from 'express';

import Logger from './logger';

class RequestHandler {
  private logger: Logger;
  constructor(logger: Logger) {
    this.logger = logger;
  }

  public throwError(res: Response, status: number, errors: any) {
    return res.status(status).json({ errors: errors });
  }

  public sendSuccess(req: Request, res: Response, status: number, message: any, data: any) {
    this.logger.log(`a request has been made and proccessed successfully at: ${new Date()}`, 'info', {});
    return res.status(status).json({
      type: 'success', message: message || 'Success result', data
    });
  }

  public sendError(req: Request, res: Response, error: any) {
    this.logger.log(`error ,Error during processing request: ${`${req.protocol}://${req.get('host')}${req.originalUrl}`} details message: ${error.message}`, 'error', {});
    return res.status(error.status || 500).json({
      type: 'error', error: (error ? error : { message: 'Unhandled Error' }),
    });
  }
}

export default RequestHandler;
