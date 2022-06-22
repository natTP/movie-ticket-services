import { APP_ENV } from './index'
import express from 'express'

export default (app) => {
  app.use('/favicon.ico', (req, res) => res.sendStatus(204))
  app.use(express.json({ limit: '5mb' }))
  app.use(express.json({ type: 'application/vnd.api+json' }))
  app.use(express.urlencoded({ limit: '5mb', extended: true }))

  if (APP_ENV === 'development') {
    app.locals.pretty = true
  }
}
