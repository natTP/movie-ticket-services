import express from 'express'

const router = express.Router()

router
  .post('/reservations')
  .get('/reservations')
  .get('/reservations/:ID')
  .get('/reservations/user/:email')

export default router
