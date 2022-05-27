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
  if (isDomainError(err)) {
    console.error(err);

    return res
      .status(err.code).json({ message: err.message });
  }
  
  next(err);
};

export default domainMiddleware;