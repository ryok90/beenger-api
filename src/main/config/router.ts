import { Express, Router } from 'express'
import { readdirSync } from 'fs'
import path from 'path'

export const setupRoutes = (app: Express): void => {
  const router = Router()
  const routePath = path.join(__dirname, '../routes')

  readdirSync(routePath).forEach(async (file) => {
    if (!file.endsWith('.map')) {
      const route = await import(`../routes/${file}`)
      route.default(router)
    }
  })
  app.use(router)
}
