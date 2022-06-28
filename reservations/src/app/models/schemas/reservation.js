import mongoose from 'mongoose'

const reservationSchema = new mongoose.Schema(
  {
    user: { type: String, required: true },
    showtime: { type: String, required: true },
    seats: [String],
    price: { type: Number, required: false },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
)

const reservationModel = mongoose.model('reservation', reservationSchema)

export default reservationModel
