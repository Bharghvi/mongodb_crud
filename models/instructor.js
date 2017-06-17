const mongoose = require('mongoose')

const Schema = mongoose.Schema

const subjectSchema = new Schema({
  sname: String,
  credit: Number
})

const instructorSchema = new Schema({
  name: String,
  field: String,
  subjects: [subjectSchema]
})

const Instructor = mongoose.model('instructor', instructorSchema)

module.exports = Instructor;
