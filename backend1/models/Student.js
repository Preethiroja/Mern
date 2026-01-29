const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  age: Number,
  department: String,
  isActive: {
    type: Boolean,
    default: true
  },
  role: {
    type: String,
    default: "student"
  }
})

module.exports = mongoose.model("Student", studentSchema)
