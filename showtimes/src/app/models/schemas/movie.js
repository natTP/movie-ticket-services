import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    releaseDate: { type: Date, required: false },
    poster: { type: String, required: false },
    duration: { type: Number, required: false },
    genre: [String],
    synopsis: { type: String, required: false },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
)

const movieModel = mongoose.model('movie', movieSchema)

export { movieSchema }
export default movieModel
