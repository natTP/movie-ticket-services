import createMovie from './createMovie'
import getByID from './getByID'
import executeValidator from './request'

export default {
  createMovie: executeValidator(createMovie),
  getMovieByID: executeValidator(getByID),
}
