import { HttpError, HttpErrorResponse } from '../contracts/http-error'
import { HttpStatusCodes } from '../enums/http-codes'

export class ServiceUnavailableError extends HttpError {
  constructor(response: HttpErrorResponse) {
    super(response, HttpStatusCodes.serviceUnavailableError)
  }
}
