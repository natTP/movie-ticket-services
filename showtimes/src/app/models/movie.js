import Movie from './schemas/movie'

const create = (data, options) => Movie.create(data, options)

const find = (query, fields = {}, options = {}) =>
  Movie.find(query, fields, options).lean().exec()

const findOne = (query, fields = {}, options = {}) =>
  Movie.findOne(query, fields, options).lean().exec()

const findOneAndUpdate = (filter, data) =>
  Movie.findOneAndUpdate(filter, data, { upsert: true, new: true }).exec()

const deleteOne = (query) => Movie.deleteOne(query).exec()

const exists = (query) => Movie.exists(query)

export default { create, find, findOne, findOneAndUpdate, deleteOne, exists }
