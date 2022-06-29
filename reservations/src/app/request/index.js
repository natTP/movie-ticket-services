import executeValidator from './request'
import create from './create'
import getByID from './getByID'

export default {
  createReservation: executeValidator(create),
  getReservationByID: executeValidator(getByID),
  getReservationByUser: executeValidator(getByID),
  deleteReservationByID: executeValidator(getByID),
}
