import { Request, NextFunction, Response } from 'express'

export const enum ReqType {
  List = 'List',
  One = 'One',
}
/**
 * write middleware functions
 */
export const setReqTypeList = (req: Request, res: Response, next: NextFunction) => {
  req.headers.reqType = ReqType.List;
  next();
}

export const setReqTypeOne = (req: Request, res: Response, next: NextFunction) => {
  req.headers.reqType = ReqType.One;
  next();
}
