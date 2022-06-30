import { param, body } from 'express-validator'
import validate from '../constants/validateMessages'
import userModel from '../models/user'

const validateFieldsList = [
  param('ID')
    .notEmpty()
    .withMessage(validate.notEmpty)
    .isString()
    .withMessage(validate.isString),
  body('email')
    .optional()
    .isEmail()
    .withMessage(validate.isEmail)
    .custom(async (value) => {
      const isExist = await userModel.exists({ email: value })
      if (isExist) {
        return Promise.reject('Email already in use.')
      }
    }),
  body('password').optional().isString().withMessage(validate.isString),
]

export default validateFieldsList
