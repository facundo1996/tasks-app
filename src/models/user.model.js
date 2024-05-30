import mongoose from 'mongoose'
import { type } from 'os'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
}, {
  timestamps: true
})

export default mongoose.model('User', userSchema)