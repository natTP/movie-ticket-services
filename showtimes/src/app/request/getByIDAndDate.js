import { param, query } from 'express-validator'
import validate from '../constants/validateMessages'

const validateFieldsList = [
  param('ID')
    .notEmpty()
    .withMessage(validate.notEmpty)
    .isString()
    .withMessage(validate.isString),
  query('date').isDate().withMessage(validate.isDate),
]

export default validateFieldsList
