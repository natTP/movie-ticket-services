import mongoose from 'mongoose'

const showtimeSchema = new mongoose.Schema(
  {
    movie: { type: String, required: true, index: true },
    theater: { type: String, required: true },
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
