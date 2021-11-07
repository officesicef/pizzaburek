interface ICustomError {
  message: string;
  statusCode?: number | undefined;
}

export class CustomError extends Error implements ICustomError {
  message = '';

  statusCode: number | undefined = 500;

  constructor(message: string, statusCode?: number) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}
