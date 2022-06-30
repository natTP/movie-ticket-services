import executeValidator from './request'
import create from './create'
import getByID from './getByID'
import update from './update'

export default {
  createReservation: executeValidator(create),
  getReservationByID: executeValidator(getByID),
  getReservationByUser: executeValidator(getByID),
  updateReservationByID: executeValidator(update),
  deleteReservationByID: executeValidator(getByID),
}
