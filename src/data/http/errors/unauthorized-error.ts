import { HttpError } from '../contracts/http-error'
import { HttpStatusCodes } from '../enums/http-codes'

export class UnauthorizedError extends HttpError {
  constructor (message: string) {
    super({ message }, HttpStatusCodes.unauthorized)
  }
}
