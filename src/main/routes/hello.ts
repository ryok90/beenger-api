import { Router } from 'express'

export default (router: Router): void => {
  router.get('/hello', (_, res) => res.send('Hello World'))
}
