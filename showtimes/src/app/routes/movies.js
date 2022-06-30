import express from 'express'
import movieController from '../controllers/movie'
import validator from '../request'

const router = express.Router()

router
  .post('/', validator.createMovie, movieController.createMovie)
  .get('/', movieController.getMovieList)
  .get('/:ID', validator.getMovieByID, movieController.getMovieByID)
  .put('/:ID', validator.updateMovieByID, movieController.updateMovieByID)
  .delete('/:ID', validator.deleteMovieByID, movieController.deleteMovieByID)

export default router
