import { HttpError, HttpErrorResponse } from '../contracts/http-error'
import { HttpStatusCodes } from '../enums/http-codes'

export class UnprocessableEntityError extends HttpError {
  constructor(response: HttpErrorResponse) {
    super(response, HttpStatusCodes.unprocessableEntity)
  }
}
