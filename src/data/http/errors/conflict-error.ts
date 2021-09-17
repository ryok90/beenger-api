import { HttpError } from '../contracts/http-error'
import { HttpStatusCodes } from '../enums/http-codes'

export class ConflictError extends HttpError {
  constructor(message: any) {
    super({ message }, HttpStatusCodes.conflict)
  }
}
