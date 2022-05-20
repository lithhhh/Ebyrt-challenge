type ResponseError = {
  error: unknown
};

type TypeDomainError = {
  code: number
  message: string
};

export { TypeDomainError, ResponseError };