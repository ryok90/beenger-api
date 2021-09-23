import { HttpError } from '../contracts/http-error'
import { HttpStatusCodes } from '../enums/http-codes'

export class ForbiddenError extends HttpError {
  constructor (message: string) {
    super({ message }, HttpStatusCodes.forbidden)
  }
}
