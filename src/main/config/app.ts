import express from 'express'
import { setupRoutes } from './router'

export const expressApp = async (): Promise<express.Application>  => {
  const expressServer = express()
  expressServer.disable('x-powered-by')
  setupRoutes(expressServer)

  return expressServer
}
