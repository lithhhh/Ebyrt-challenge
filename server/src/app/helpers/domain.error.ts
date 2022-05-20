import StatusCode from './status.enum';
import MessageErrors from './messages.enum';
import { TypeDomainError } from './error.type';

class DomainError extends Error {
  code: StatusCode;

  constructor(code: StatusCode, message: MessageErrors) {
    super(message);
    this.code = code;
  }
}

const isDomainError = (err: TypeDomainError) => err instanceof DomainError;

export { DomainError, isDomainError };