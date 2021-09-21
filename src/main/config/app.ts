import express from 'express'
import { setupRoutes } from './router'

export const expressApp = (): express.Application => {
  const expressServer = express()
  expressServer.disable('x-powered-by')
  setupRoutes(expressServer)

  return expressServer
}
