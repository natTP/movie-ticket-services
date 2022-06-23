import Theater from './schemas/theater'

const create = (data, options) => Theater.create(data, options)

const find = (query, fields = {}, options = {}) =>
  Theater.find(query, fields, options).lean().exec()

const findOne = (query, fields = {}, options = {}) =>
  Theater.findOne(query, fields, options).lean().exec()

const findOneAndUpdate = (filter, data) =>
  Theater.findOneAndUpdate(filter, data, { upsert: true, new: true }).exec()

const deleteOne = (query) => Theater.deleteOne(query).exec()

const exists = (query) => Theater.exists(query)

export default { create, find, findOne, findOneAndUpdate, deleteOne, exists }
