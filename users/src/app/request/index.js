import create from './create'
import executeValidator from './request'
import getByID from './getByID'
import getByEmail from './getByEmail'
import update from './update'

export default {
  createUser: executeValidator(create),
  getUserByID: executeValidator(getByID),
  getUserByEmail: executeValidator(getByEmail),
  updateUserByID: executeValidator(update),
  deleteUserByID: executeValidator(getByID),
}
