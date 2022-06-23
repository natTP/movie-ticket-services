import { body } from 'express-validator'
import validate from '../constants/validateMessages'

const validateFieldsList = [
  body('name').notEmpty().withMessage(validate.notEmpty),
  body('releaseDate').isDate().withMessage(validate.isDate),
  body('poster').isURL().withMessage(validate.isURL),
  body('duration').isInt().withMessage(validate.isInt),
  body('genre').isArray().withMessage(validate.isArray),
  body('genre.*').isString().withMessage(validate.isString),
  body('synopsis').isString().withMessage(validate.isString),
]

export default validateFieldsList
