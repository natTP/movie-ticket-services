import createMovie from './createMovie'
import createShowtime from './createShowtime'
import createTheater from './createTheater'
import getByID from './getByID'
import getByIDAndDate from './getByIDAndDate'
import updateSeats from './updateSeats'
import updateMovie from './updateMovie'
import updateTheater from './updateTheater'
import executeValidator from './request'

export default {
  createMovie: executeValidator(createMovie),
  getMovieByID: executeValidator(getByID),
  updateMovieByID: executeValidator(updateMovie),
  deleteMovieByID: executeValidator(getByID),

  createShowtime: executeValidator(createShowtime),
  getShowtimeByMovieID: executeValidator(getByIDAndDate),
  getShowtimeByID: executeValidator(getByID),
  updateShowtimeReservedSeats: executeValidator(updateSeats),
  deleteShowtimeByID: executeValidator(getByID),

  createTheater: executeValidator(createTheater),
  getTheaterByID: executeValidator(getByID),
  updateTheaterByID: executeValidator(updateTheater),
  deleteTheaterByID: executeValidator(getByID),
}
