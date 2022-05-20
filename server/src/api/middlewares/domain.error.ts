import { Request, Response, NextFunction } from 'express';
import {
  isDomainError,
  TypeDomainError,
} from '../../app/helpers';

const domainMiddleware = (
  err: TypeDomainError,
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log('passa aqui 2');
  
  if (isDomainError(err)) {
    console.error(err);

    return res
      .status(err.code).json({ message: err.message });
  }
  
  next(err);
};

export default domainMiddleware;