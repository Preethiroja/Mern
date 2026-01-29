const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Admin = require("../models/Admin")
const Student = require("../models/Student")

exports.login = async (req, res) => {
  const { email, password } = req.body

  let user = await Admin.findOne({ email })
  let role = "admin"

  if (!user) {
    user = await Student.findOne({ email })
    role = "student"
  }

  if (!user) {
    return res.status(400).json({ msg: "User not found" })
  }

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
    return res.status(400).json({ msg: "Invalid credentials" })
  }

  const token = jwt.sign(
    { id: user._id, role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  )

  res.json({ token, role })
}