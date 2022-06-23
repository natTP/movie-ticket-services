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

export default router
