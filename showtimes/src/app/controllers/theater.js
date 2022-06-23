import { matchedData } from 'express-validator'
import { ERROR_CREATION, NOT_FOUND_DATA } from '../constants/errors/unsuccess'
import theaterModel from '../models/theater'

const createTheater = async (req, res) => {
  const matched = matchedData(req)
  try {
    const result = await theaterModel.create({ ...matched })
    res.status(201).json(result)
  } catch (error) {
    throw ERROR_CREATION
  }
}

const getTheaterList = async (req, res) => {
  try {
    const result = await theaterModel.find({})
    res.status(200).json(result)
  } catch (error) {
    throw NOT_FOUND_DATA
  }
}

const getTheaterByID = async (req, res) => {
  const { ID } = req.params
  try {
    const result = await theaterModel.findOne({ _id: ID })
    res.status(200).json(result)
  } catch (error) {
    throw NOT_FOUND_DATA
  }
}

export default {
  createTheater,
  getTheaterList,
  getTheaterByID,
}
