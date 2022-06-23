import { body } from 'express-validator'
import validate from '../constants/validateMessages'
import userModel from '../models/user'

const validateFieldsList = [
  body('email')
    .notEmpty()
    .withMessage(validate.notEmpty)
    .isEmail()
    .withMessage(validate.isEmail)
    .custom(async (value) => {
      const isExist = await userModel.exists({ email: value })
      if (isExist) {
        return Promise.reject('Email already in use.')
      }
    }),
  body('password')
    .notEmpty()
    .withMessage(validate.notEmpty)
    .isString()
    .withMessage(validate.isString),
]

export default validateFieldsList
