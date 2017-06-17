const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create Schema
const studentSchema = new Schema({
  name: String,
  cgpa: Number
})

//create model of above Schema
const Student = mongoose.model('student', studentSchema);

module.exports = Student;
