import Mongoose from 'mongoose'
import env from './config/env'

Mongoose.connect(env.mongoUrl).then(async () => {
  const app = await import('main/config/app').then(async (express) => express.expressApp())
  app.listen(env.port, () => console.log(`server running at http://localhost:${env.port}`))
}).catch(console.log)
