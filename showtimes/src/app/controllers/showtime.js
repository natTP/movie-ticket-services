import { matchedData } from 'express-validator'
import { ERROR_UPDATED, NOT_FOUND_DATA } from '../constants/errors/unsuccess'
import showtimeModel from '../models/showtime'

const createShowtime = async (req, res) => {
  const matched = matchedData(req)
  try {
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
  const { date } = req.query
  try {
    const dateObject = new Date(date)
    const nextDateObject = new Date(date)
    nextDateObject.setDate(nextDateObject.getDate() + 1)

    const result = await showtimeModel.find({
      movie: ID,
      dateTime: {
        $gte: dateObject,
        $lt: nextDateObject,
      },
    })
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

const updateShowtimeReservedSeats = async (req, res) => {
  const { ID } = req.params
  const { reservedSeats } = req.body
  try {
    const result = await showtimeModel.findOneAndUpdate(
      { _id: ID },
      { reservedSeats }
    )
    res.status(200).json(result)
  } catch (error) {
    throw ERROR_UPDATED
  }
}

export default {
  createShowtime,
  getShowtimeList,
  getShowtimeByMovieID,
  getShowtimeByID,
  updateShowtimeReservedSeats,
}
