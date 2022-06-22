import { matchedData } from 'express-validator'
import { ERROR_CREATION, NOT_FOUND_DATA } from '../constants/errors/unsuccess'
import userModel from '../models/user'

const createUser = async (req, res) => {
  const matched = matchedData(req)
  try {
    const result = await userModel.create({ ...matched })
    res.status(201).json(result)
  } catch (error) {
    throw ERROR_CREATION
  }
}

const getAllUsers = async (req, res) => {
  const result = await userModel.find({})
  if (!result) {
    throw NOT_FOUND_DATA
  }
  res.status(200).json(result)
}

const getUserByEmail = async (req, res) => {
  const { email } = req.params
  const result = await userModel.find({ email })
  if (!result) {
    throw NOT_FOUND_DATA
  }
  res.status(200).json(result)
}

const getUserByID = async (req, res) => {
  const { ID } = req.params
  const result = await userModel.findOne({ _id: ID })
  if (!result) {
    throw NOT_FOUND_DATA
  }
  res.status(200).json(result)
}

export default {
  createUser,
  getAllUsers,
  getUserByEmail,
  getUserByID,
}
