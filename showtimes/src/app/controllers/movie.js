import { matchedData } from 'express-validator'
import { ERROR_CREATION, NOT_FOUND_DATA } from '../constants/errors/unsuccess'
import movieModel from '../models/movie'

const createMovie = async (req, res) => {
  const matched = matchedData(req)
  try {
    const result = await movieModel.create({ ...matched })
    res.status(201).json(result)
  } catch (error) {
    throw ERROR_CREATION
  }
}

const getMovieList = async (req, res) => {
  const result = await movieModel.find({})
  if (!result) {
    throw NOT_FOUND_DATA
  }
  res.status(200).json(result)
}

const getMovieByID = async (req, res) => {
  const { ID } = req.params
  const result = await movieModel.findOne({ _id: ID })
  if (!result) {
    throw NOT_FOUND_DATA
  }
  res.status(200).json(result)
}

export default {
  createMovie,
  getMovieList,
  getMovieByID,
}
