import mongoose from 'mongoose'

const Schema = mongoose.Schema
	
const skillSchema = new Schema({
  text: String,
  note: String
})

const Skill = mongoose.model('Skill', skillSchema)

export {
  Skill
}