import createMovie from './createMovie'
import createShowtime from './createShowtime'
import createTheater from './createTheater'
import getByID from './getByID'
import executeValidator from './request'

export default {
  createMovie: executeValidator(createMovie),
  getMovieByID: executeValidator(getByID),
  createShowtime: executeValidator(createShowtime),
  getShowtimeByMovieID: executeValidator(getByID),
  getShowtimeByID: executeValidator(getByID),
  createTheater: executeValidator(createTheater),
  getTheaterByID: executeValidator(getByID),
}
