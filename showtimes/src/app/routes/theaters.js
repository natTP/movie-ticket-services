import express from 'express'
import theaterController from '../controllers/theater'
import validator from '../request'

const router = express.Router()

router
  .post('/', validator.createTheater, theaterController.createTheater)
  .get('/', theaterController.getTheaterList)
  .get('/:ID', validator.getTheaterByID, theaterController.getTheaterByID)

export default router
