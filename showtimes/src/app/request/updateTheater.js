import { param, body } from 'express-validator'
import validate from '../constants/validateMessages'

const validateFieldsList = [
  param('ID')
    .notEmpty()
    .withMessage(validate.notEmpty)
    .isString()
    .withMessage(validate.isString),
  body('name').optional(),
  body('location').optional(),
  body('seats').optional().isArray().withMessage(validate.isArray),
  body('seats.*.type').notEmpty().withMessage(validate.notEmpty),
  body('seats.*.price')
    .notEmpty()
    .withMessage(validate.notEmpty)
    .isInt()
    .withMessage(validate.isInt),
  body('seats.*.rows').isArray().withMessage(validate.isArray),
  body('seats.*.rows.*')
    .isLength({ min: 1, max: 1 })
    .withMessage('Must be of length 1.'),
]

export default validateFieldsList
