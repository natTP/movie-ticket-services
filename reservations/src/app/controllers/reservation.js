import { matchedData } from 'express-validator'
import { ERROR_CREATION, NOT_FOUND_DATA } from '../constants/errors/unsuccess'
import reservationModel from '../models/reservation'

const createReservation = async (req, res) => {
  const matched = matchedData(req)
  try {
    const result = await reservationModel.create({ ...matched })
    res.status(201).json(result)
  } catch (error) {
    throw ERROR_CREATION
  }
}

const getReservationList = async (req, res) => {
  try {
    const result = await reservationModel.find({})
    res.status(200).json(result)
  } catch (error) {
    throw NOT_FOUND_DATA
  }
}

const getReservationByUser = async (req, res) => {
  const { ID } = req.params
  try {
    const result = await reservationModel.find({ user: ID })
    res.status(200).json(result)
  } catch (error) {
    throw NOT_FOUND_DATA
  }
}

const getReservationByID = async (req, res) => {
  const { ID } = req.params
  try {
    const result = await reservationModel.findOne({ _id: ID })
    res.status(200).json(result)
  } catch (error) {
    throw NOT_FOUND_DATA
  }
}

export default {
  createReservation,
  getReservationList,
  getReservationByUser,
  getReservationByID,
}
