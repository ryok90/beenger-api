import { HttpStatusCodes } from 'data/http/enums/http-codes'
import { UnauthorizedError } from '../errors/unauthorized-error'

export type HttpResponse<T = any> = {
  statusCode: number
  data?: T
}

export const successResponse = (data?: any): HttpResponse => ({
  statusCode: HttpStatusCodes.ok,
  data,
})

export const createdResponse = (data: any): HttpResponse => ({
  statusCode: HttpStatusCodes.created,
  data,
})

export const noContentResponse = (): HttpResponse => ({
  statusCode: HttpStatusCodes.noContent,
})

export const unauthorizedResponse = (): HttpResponse => ({
  statusCode: HttpStatusCodes.unauthorized,
  data: new UnauthorizedError('Unauthorized'),
})

export const forbiddenResponse = (error: Error): HttpResponse => ({
  statusCode: HttpStatusCodes.forbidden,
  data: error,
})

export const notFoundResponse = (error: Error): HttpResponse => ({
  statusCode: HttpStatusCodes.notFound,
  data: error,
})

export const unprocessableEntityResponse = (error: Error): HttpResponse => ({
  statusCode: HttpStatusCodes.unprocessableEntity,
  data: error,
})

export const errorResponse = (error: Error): HttpResponse => ({
  statusCode: HttpStatusCodes.internalServerError,
  data: error.message,
})
