import { Express, Router } from 'express'
import { readdirSync } from 'fs'

export const setupRoutes = (app: Express) => {
  const router = Router()
  readdirSync(`${__dirname}/../routes`).forEach(async (file) => {
    if (!file.endsWith('.map')) {
      const route = await import(`../routes/${file}`)
      route.default(router)
    }
  })
  app.use(router)
}
