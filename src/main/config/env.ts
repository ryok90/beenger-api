const isDevEnv = process.env.NODE_ENV === 'dev'

if (isDevEnv) {
  require('dotenv').config({ path: '.env' })
}

export default {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT || 3000,
  mongoUrl: process.env.MONGO_URL
}
