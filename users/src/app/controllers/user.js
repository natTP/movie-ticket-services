import { matchedData } from 'express-validator'
import {
  ERROR_CREATION,
  ERROR_UPDATED,
  ERROR_DELETED,
  NOT_FOUND_DATA,
} from '../constants/errors/unsuccess'
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

const getUserList = async (req, res) => {
  try {
    const result = await userModel.find({})
    res.status(200).json(result)
  } catch (error) {
    throw NOT_FOUND_DATA
  }
}

const getUserByEmail = async (req, res) => {
  const { email } = req.params
  try {
    const result = await userModel.find({ email })
    res.status(200).json(result)
  } catch (error) {
    throw NOT_FOUND_DATA
  }
}

const getUserByID = async (req, res) => {
  const { ID } = req.params
  try {
    const result = await userModel.findOne({ _id: ID })
    res.status(200).json(result)
  } catch (error) {
    throw NOT_FOUND_DATA
  }
}

const updateUserByID = async (req, res) => {
  const { ID } = req.params
  const matched = matchedData(req, { includeOptionals: true })
  try {
    const result = await userModel.findOneAndUpdate({ _id: ID }, { ...matched })
    res.status(200).json(result)
  } catch (error) {
    throw ERROR_UPDATED
  }
}

const deleteUserByID = async (req, res) => {
  const { ID } = req.params
  try {
    const result = await userModel.deleteOne({ _id: ID })
    res.status(200).json(result)
  } catch (error) {
    throw ERROR_DELETED
  }
}

export default {
  createUser,
  getUserList,
  getUserByEmail,
  getUserByID,
  updateUserByID,
  deleteUserByID,
}
