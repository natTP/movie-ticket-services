import { param, body } from 'express-validator'
import validate from '../constants/validateMessages'

const validateFieldsList = [
  param('ID')
    .notEmpty()
    .withMessage(validate.notEmpty)
    .isString()
    .withMessage(validate.isString),
  body('name').optional(),
  body('releaseDate').optional().isDate().withMessage(validate.isDate),
  body('poster').optional().isURL().withMessage(validate.isURL),
  body('duration').optional().isInt().withMessage(validate.isInt),
  body('genre').optional().isArray().withMessage(validate.isArray),
  body('genre.*').isString().withMessage(validate.isString),
  body('synopsis').optional(),
]

export default validateFieldsList
