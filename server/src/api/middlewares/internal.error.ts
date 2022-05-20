import { Request, Response, NextFunction } from 'express';
import {
  StatusCode,
  MessageErrors,
  ResponseError,
} from '../../app/helpers';

const internalMiddleware = (
  err: ResponseError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.error(err);
  
  return res
    .status(StatusCode.INTERNAL_SERVER_ERROR)
    .json({ message: MessageErrors.INTERNAL_SERVER_ERROR });
};

export default internalMiddleware;