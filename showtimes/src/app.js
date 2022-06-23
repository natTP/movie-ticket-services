import express from 'express'
import configExpress from './config/express'
import movieRoutes from './app/routes/movies'
import showtimeRoutes from './app/routes/showtimes'
import theaterRoutes from './app/routes/theaters'
import { URL_PREFIX, APP_ENV } from './config'
import expressErrorResponse from './app/constants/errors/defaultErrorResponse'

const app = express()
configExpress(app)

app.get('/healthz', (req, res) => res.status(200).json({ status: 'ok' }))
app.use(`${URL_PREFIX}/movies`, movieRoutes)
app.use(`${URL_PREFIX}/showtimes`, showtimeRoutes)
app.use(`${URL_PREFIX}/theaters`, theaterRoutes)

app.use(expressErrorResponse({ enableLog: APP_ENV !== 'test' }))

export default app
