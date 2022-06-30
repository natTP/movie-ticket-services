import express from 'express'
import theaterController from '../controllers/theater'
import validator from '../request'

const router = express.Router()

router
  .post('/', validator.createTheater, theaterController.createTheater)
  .get('/', theaterController.getTheaterList)
  .get('/:ID', validator.getTheaterByID, theaterController.getTheaterByID)
  .put('/:ID', validator.updateTheaterByID, theaterController.updateTheaterByID)
  .delete(
    '/:ID',
    validator.deleteTheaterByID,
    theaterController.deleteTheaterByID
  )

export default router
