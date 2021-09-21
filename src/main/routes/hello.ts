import { Router } from 'express'
import { model, Schema } from 'mongoose'

export default (router: Router): void => {
  router.get('/hello', (_, res) => res.send('Hello World'))
  router.get('/test-mongo', async (_, res) => {
    const kittySchema = new Schema({ name: String })
    const Kitten = model('Kitten', kittySchema)
    // const newKitty = new Kitten({ name: 'Test' })
    // await newKitty.save()
    console.log(await Kitten.find({ name: /^Test/ }))
    res.send('Success')
  })
}
