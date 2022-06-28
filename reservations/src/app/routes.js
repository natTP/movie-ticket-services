import express from 'express'
import reservationController from './controllers/reservation'

const router = express.Router()

router
  .post('/reservations', reservationController.createReservation)
  .get('/reservations', reservationController.getReservationList)
  .get('/reservations/:ID', reservationController.getReservationByID)
  .get('/reservations/user/:ID', reservationController.getReservationByUser)

export default router
