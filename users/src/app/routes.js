import express from 'express'
import userController from './controllers/user'
import validator from './request'

const router = express.Router()

router
  .post('/users', validator.createUser, userController.createUser)
  .get('/users', userController.getUserList)
  .get('/users/:ID', validator.getUserByID, userController.getUserByID)
  .get(
    '/users/email/:email',
    validator.getUserByEmail,
    userController.getUserByEmail
  )
  .put('/users/:ID', validator.updateUserByID, userController.updateUserByID)
  .delete('/users/:ID', validator.deleteUserByID, userController.deleteUserByID)

export default router
