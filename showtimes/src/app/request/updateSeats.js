import { param, body } from 'express-validator'
import validate from '../constants/validateMessages'

const validateFieldsList = [
  param('ID')
    .notEmpty()
    .withMessage(validate.notEmpty)
    .isString()
    .withMessage(validate.isString),
  body('reservedSeats').isArray().withMessage(validate.isArray),
  body('reservedSeats.*').isAlphanumeric().withMessage('incorrect format'),
]

export default validateFieldsList
