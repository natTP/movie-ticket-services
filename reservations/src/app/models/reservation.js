import Reservation from './schemas/reservation'

const create = (data, options) => Reservation.create(data, options)

const find = (query, fields = {}, options = {}) =>
  Reservation.find(query, fields, options).lean().exec()

const findOne = (query, fields = {}, options = {}) =>
  Reservation.findOne(query, fields, options).lean().exec()

const findOneAndUpdate = (filter, data) =>
  Reservation.findOneAndUpdate(filter, data, { upsert: true, new: true }).exec()

const deleteOne = (query) => Reservation.deleteOne(query).exec()

const exists = (query) => Reservation.exists(query)

export default { create, find, findOne, findOneAndUpdate, deleteOne, exists }
