import express from 'express'
import showtimeController from '../controllers/showtime'
import validator from '../request'

const router = express.Router()

router
  .post('/', validator.createShowtime, showtimeController.createShowtime)
  .get('/', showtimeController.getShowtimeList)
  .get(
    '/movie/:ID',
    validator.getShowtimeByMovieID,
    showtimeController.getShowtimeByMovieID
  )
  .get('/:ID', validator.getShowtimeByID, showtimeController.getShowtimeByID)
  .patch(
    '/:ID',
    validator.updateShowtimeReservedSeats,
    showtimeController.updateShowtimeReservedSeats
  )

export default router
