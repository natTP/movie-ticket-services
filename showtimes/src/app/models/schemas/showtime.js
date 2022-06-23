import mongoose from 'mongoose'
import { movieSchema } from './movie'
import { theaterSchema } from './theater'

const showtimeSchema = new mongoose.Schema(
  {
    movie: { type: movieSchema, required: true },
    theater: { type: theaterSchema, required: true },
    reservedSeats: [String],
    dateTime: { type: Date, required: true },
    language: { type: String, required: false },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
)

const showtimeModel = mongoose.model('showtime', showtimeSchema)

export { showtimeSchema }
export default showtimeModel
