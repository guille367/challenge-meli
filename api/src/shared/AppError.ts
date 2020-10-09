export class AppError extends Error {
  statusCode: number;
  status: string;
  isOperational: boolean;

  constructor(errorMessage: string, statusCode: number = 500) {
    console.log(errorMessage);

    super(errorMessage);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}
