import { HttpResponse } from '../models/http'

export interface Controller {
  handle: (request: Controller.Request) => Promise<HttpResponse>
}

export namespace Controller {
  export type Request<Body = any, Params = any> = {
    body: Body
    params: Params
    query: any
    headers: any
    url: string
  }
}
