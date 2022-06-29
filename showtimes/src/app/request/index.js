import createMovie from './createMovie'
import createShowtime from './createShowtime'
import createTheater from './createTheater'
import getByID from './getByID'
import getByIDAndDate from './getByIDAndDate'
import updateSeats from './updateSeats'
import executeValidator from './request'

export default {
  createMovie: executeValidator(createMovie),
  getMovieByID: executeValidator(getByID),
  createShowtime: executeValidator(createShowtime),
  getShowtimeByMovieID: executeValidator(getByIDAndDate),
  getShowtimeByID: executeValidator(getByID),
  updateShowtimeReservedSeats: executeValidator(updateSeats),
  createTheater: executeValidator(createTheater),
  getTheaterByID: executeValidator(getByID),
}
