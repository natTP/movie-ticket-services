import { matchedData } from 'express-validator'
import { ERROR_CREATION, NOT_FOUND_DATA } from '../constants/errors/unsuccess'
import showtimeModel from '../models/showtime'

const createShowtime = async (req, res) => {
  const matched = matchedData(req)
  try {
    console.log(matched)
    const result = await showtimeModel.create({ ...matched })
    res.status(201).json(result)
  } catch (error) {
    throw error
  }
}

const getShowtimeList = async (req, res) => {
  try {
    const result = await showtimeModel.find({})
    res.status(200).json(result)
  } catch (error) {
    throw NOT_FOUND_DATA
  }
}

const getShowtimeByMovieID = async (req, res) => {
  const { ID } = req.params
  try {
    const result = await showtimeModel.find({ movie: ID })
    res.status(200).json(result)
  } catch (error) {
    throw NOT_FOUND_DATA
  }
}

const getShowtimeByID = async (req, res) => {
  const { ID } = req.params
  try {
    const result = await showtimeModel.findOne({ _id: ID })
    res.status(200).json(result)
  } catch (error) {
    throw NOT_FOUND_DATA
  }
}

export default {
  createShowtime,
  getShowtimeList,
  getShowtimeByMovieID,
  getShowtimeByID,
}
