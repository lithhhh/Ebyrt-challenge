import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { StatusCode, ResponseError } from '../../app/helpers';

const zodMiddleware = (
  err: ResponseError,
  _req: Request,
  res: Response,
  next: NextFunction,
) => {  
  if (err instanceof ZodError) {
    console.error(err);
    const { message } = err.issues[0];
    
    return res.status(StatusCode.BAD_REQUEST).json({ error: message });
  }
  console.log('passa aqui');

  return next(err);
};

export default zodMiddleware;