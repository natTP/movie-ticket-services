import create from './create'
import executeValidator from './request'
import getByID from './getByID'
import getByEmail from './getByEmail'

export default {
  createUser: executeValidator(create),
  getUserByID: executeValidator(getByID),
  getUserByEmail: executeValidator(getByEmail),
}
