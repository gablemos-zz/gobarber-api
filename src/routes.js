import { Router } from 'express'
import multer from 'multer'

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import FileController from './app/controllers/FileController'
import ProviderController from './app/controllers/ProviderController'
import AppointmentController from './app/controllers/AppointmentController'
import ScheduleController from './app/controllers/ScheduleController'
import NotificationController from './app/controllers/NotificationController'
import AvailableController from './app/controllers/AvailableController'

import authMiddleware from './app/middlewares/auth'

import multerConfig from './config/multer'

const routes = new Router()
const upload = multer(multerConfig)

routes
  .post('/users', UserController.store)

  .post('/sessions', SessionController.store)

  .use(authMiddleware)

  .put('/users', UserController.update)

  .get('/providers', ProviderController.index)
  .get('/providers/:providerId/available', AvailableController.index)

  .get('/appointments', AppointmentController.index)
  .post('/appointments', AppointmentController.store)
  .delete('/appointments/:id', AppointmentController.delete)

  .get('/schedule', ScheduleController.index)

  .get('/notifications', NotificationController.index)
  .put('/notifications/:id', NotificationController.update)

  .post('/files', upload.single('file'), FileController.store)

export default routes