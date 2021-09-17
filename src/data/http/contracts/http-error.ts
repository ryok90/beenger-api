export abstract class HttpError<T extends HttpErrorResponse = HttpErrorResponse> extends Error {
  readonly response: T
  readonly code: number

  constructor(response: T, code: number, stack?: any) {
    super()
    this.code = code
    this.response = response
    this.stack = stack
    this.message = response?.message
    this.name = this.constructor.name
    Error.captureStackTrace(this, this.constructor)
  }
}

export type HttpErrorResponse = {
  message?: string
  errors?: HttpErrors
}

export type HttpErrors = {
  [name: string]: string[]
}
