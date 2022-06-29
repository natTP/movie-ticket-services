import Showtime from './schemas/showtime'

const create = (data, options) => Showtime.create(data, options)

const find = (query, fields = {}, options = {}) =>
  Showtime.find(query, fields, options).lean().exec()

const findOne = (query, fields = {}, options = {}) =>
  Showtime.findOne(query, fields, options).lean().exec()

const findOneAndUpdate = (filter, data) =>
  Showtime.findOneAndUpdate(filter, data, { upsert: false, new: true }).exec()

const deleteOne = (query) => Showtime.deleteOne(query).exec()

const exists = (query) => Showtime.exists(query)

export default { create, find, findOne, findOneAndUpdate, deleteOne, exists }
