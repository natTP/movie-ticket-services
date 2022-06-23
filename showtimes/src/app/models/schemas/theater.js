import mongoose from 'mongoose'

const theaterSeatSchema = new mongoose.Schema(
  {
    _id: false,
    type: { type: String, required: true },
    price: { type: Number, required: true },
    rows: [String],
  },
  {
    versionKey: false,
  }
)

const theaterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    seats: [theaterSeatSchema],
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
)

const theaterModel = mongoose.model('showtime', theaterSchema)

export { theaterSchema }
export default theaterModel
