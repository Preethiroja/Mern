const Student = require("../../backend/models/Student")

exports.viewProfile = async (req, res) => {
  const student = await Student.findById(req.userId)
  res.json(student)
}

exports.updateProfile = async (req, res) => {
  const { role, ...data } = req.body

  const student = await Student.findByIdAndUpdate(
    req.userId,
    data,
    { new: true }
  )

  res.json(student)
}