import mongoose from 'mongoose'

const Schema = mongoose.Schema
	
const skillSchema = new Schema({
  skill: String,
  note: String
})

const Skill = mongoose.model('Skill', todoSchema)

export {
  Skill
}