import { body } from 'express-validator'
import axios from 'axios'
import { URL_USER_SERVICE, URL_SHOWTIME_SERVICE } from '../../config'
import validate from '../constants/validateMessages'

const validateFieldsList = [
  body('user')
    .notEmpty()
    .withMessage(validate.notEmpty)
    .custom(async (value) => {
      try {
        await axios.get(`${URL_USER_SERVICE}/users/${value}`)
      } catch (error) {
        return Promise.reject(error)
      }
    }),
  body('showtime')
    .notEmpty()
    .withMessage(validate.notEmpty)
    .custom(async (value) => {
      try {
        await axios.get(`${URL_SHOWTIME_SERVICE}/showtimes/${value}`)
      } catch (error) {
        return Promise.reject(error)
      }
    }),
  body('seats').isArray().withMessage(validate.isArray),
  body('seats.*').isString().withMessage(validate.isString),
  body('price').isInt().withMessage(validate.isInt),
]

export default validateFieldsList
