import { Controller } from 'data/http/contracts/controller'
import { NextFunction, Request, Response } from 'express'

export const expressHandlerAdapter = (controller: Controller) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const request: Controller.Request = {
      body: req.body,
      params: req.params,
      query: req.query,
      headers: req.headers,
      url: req.url,
    }

    try {
      const { statusCode, ...response } = await controller.handle(request)

      res.status(statusCode).json(response)
    } catch (error) {
      next(error)
    }
  }
}
