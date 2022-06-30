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
  try {
    const result = await movieModel.find({})
    res.status(200).json(result)
  } catch (error) {
    throw NOT_FOUND_DATA
  }
}

const getMovieByID = async (req, res) => {
  const { ID } = req.params
  try {
    const result = await movieModel.findOne({ _id: ID })
    res.status(200).json(result)
  } catch (error) {
    throw NOT_FOUND_DATA
  }
}

const updateMovieByID = async (req, res) => {
  const { ID } = req.params
  const matched = matchedData(req, { includeOptionals: true })
  try {
    const result = await movieModel.findOneAndUpdate(
      { _id: ID },
      { ...matched }
    )
    res.status(200).json(result)
  } catch (error) {
    throw ERROR_UPDATED
  }
}

const deleteMovieByID = async (req, res) => {
  const { ID } = req.params
  try {
    const result = await movieModel.deleteOne({ _id: ID })
    res.status(200).json(result)
  } catch (error) {
    throw ERROR_DELETED
  }
}

export default {
  createMovie,
  getMovieList,
  getMovieByID,
  updateMovieByID,
  deleteMovieByID,
}
