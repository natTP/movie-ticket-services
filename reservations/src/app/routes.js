import express from 'express'
import reservationController from './controllers/reservation'
import validator from './request'

const router = express.Router()

router
  .post(
    '/reservations',
    validator.createReservation,
    reservationController.createReservation
  )
  .get('/reservations', reservationController.getReservationList)
  .get(
    '/reservations/:ID',
    validator.getReservationByID,
    reservationController.getReservationByID
  )
  .get(
    '/reservations/user/:ID',
    validator.getReservationByUser,
    reservationController.getReservationByUser
  )
  .put(
    '/reservations/:ID',
    validator.updateReservationByID,
    reservationController.updateReservationByID
  )
  .delete(
    '/reservations/:ID',
    validator.deleteReservationByID,
    reservationController.deleteReservationByID
  )

export default router
