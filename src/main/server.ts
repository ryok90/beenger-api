import env from './config/env'

const bootstrap = async (): Promise<void> => {
  const app = await import('main/config/app').then(async (express) => express.expressApp())

  app.listen(env.port, () => console.log(`server running at http://localhost:${env.port}`))
}

bootstrap()
