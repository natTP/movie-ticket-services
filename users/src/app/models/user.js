import User from './schemas/user'

const create = (data, options) => User.create(data, options)

const find = (query, fields = {}, options = {}) =>
  User.find(query, fields, options).lean().exec()

const findOne = (query, fields = {}, options = {}) =>
  User.findOne(query, fields, options).lean().exec()

const findOneAndUpdate = (filter, data) =>
  User.findOneAndUpdate(filter, data, { upsert: true, new: true }).exec()

const deleteOne = (query) => User.deleteOne(query).exec()

export default { create, find, findOne, findOneAndUpdate, deleteOne }
