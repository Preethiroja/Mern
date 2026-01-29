const bcrypt = require("bcryptjs")
const Student = require("../models/Student")

exports.createStudent = async (req, res) => {
  const { name, email, password, age, department } = req.body

  const hashedPassword = await bcrypt.hash(password, 10)

  const student = await Student.create({
    name,
    email,
    password: hashedPassword,
    age,
    department
  })

  res.status(201).json(student)
}

exports.updateStudent = async (req, res) => {
  const student = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )

  res.json(student)
}

exports.deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id)
  res.json({ msg: "Student deleted" })
}

exports.getAllStudents = async (req, res) => {
  const students = await Student.find()
  res.json(students)
}
