import { param } from 'express-validator'
import validate from '../constants/validateMessages'

const validateFieldsList = [
  param('email')
    .notEmpty()
    .withMessage(validate.notEmpty)
    .isEmail()
    .withMessage(validate.isEmail),
]

export default validateFieldsList
