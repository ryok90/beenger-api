import { HttpError } from '../contracts/http-error'
import { HttpStatusCodes } from '../enums/http-codes'

export class NotFoundError extends HttpError {
  constructor (message: any) {
    super({ message }, HttpStatusCodes.notFound)
  }
}
