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

const updateTheaterByID = async (req, res) => {
  const { ID } = req.params
  const matched = matchedData(req, { includeOptionals: true })
  try {
    const result = await theaterModel.findOneAndUpdate(
      { _id: ID },
      { ...matched }
    )
    res.status(200).json(result)
  } catch (error) {
    throw ERROR_UPDATED
  }
}

const deleteTheaterByID = async (req, res) => {
  const { ID } = req.params
  try {
    const result = await theaterModel.deleteOne({ _id: ID })
    res.status(200).json(result)
  } catch (error) {
    throw ERROR_DELETED
  }
}

export default {
  createTheater,
  getTheaterList,
  getTheaterByID,
  updateTheaterByID,
  deleteTheaterByID,
}
