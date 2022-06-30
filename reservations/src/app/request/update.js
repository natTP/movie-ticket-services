import { param, body } from 'express-validator'
import axios from 'axios'
import { URL_USER_SERVICE, URL_SHOWTIME_SERVICE } from '../../config'
import validate from '../constants/validateMessages'

const validateFieldsList = [
  param('ID')
    .notEmpty()
    .withMessage(validate.notEmpty)
    .isString()
    .withMessage(validate.isString),
  body('user')
    .optional()
    .custom(async (value) => {
      try {
        await axios.get(`${URL_USER_SERVICE}/users/${value}`)
      } catch (error) {
        return Promise.reject(error)
      }
    }),
  body('showtime')
    .optional()
    .custom(async (value) => {
      try {
        await axios.get(`${URL_SHOWTIME_SERVICE}/showtimes/${value}`)
      } catch (error) {
        return Promise.reject(error)
      }
    }),
  body('seats').optional().isArray().withMessage(validate.isArray),
  body('seats.*').isString().withMessage(validate.isString),
  body('price').optional().isInt().withMessage(validate.isInt),
]

export default validateFieldsList
