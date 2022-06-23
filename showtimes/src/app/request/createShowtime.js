import { body } from 'express-validator'
import validate from '../constants/validateMessages'
import movieModel from '../models/movie'
import theaterModel from '../models/theater'

const validateFieldsList = [
  body('movie')
    .notEmpty()
    .withMessage(validate.notEmpty)
    .custom(async (value) => {
      try {
        const isExist = await movieModel.exists({ _id: value })
        if (!isExist) return Promise.reject('Movie does not exist.')
      } catch {
        return Promise.reject('Movie does not exist.')
      }
    }),
  body('theater')
    .notEmpty()
    .withMessage(validate.notEmpty)
    .custom(async (value) => {
      try {
        const isExist = await theaterModel.exists({ _id: value })
        if (!isExist) return Promise.reject('Theater does not exist.')
      } catch {
        return Promise.reject('Theater does not exist.')
      }
    }),
  body('dateTime').isISO8601().withMessage(validate.isDateTime),
  body('language').isString().withMessage(validate.isString),
]

export default validateFieldsList
