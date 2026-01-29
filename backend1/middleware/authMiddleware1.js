const jwt = require("jsonwebtoken")

exports.protect = (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1]
  }

  if (!token) {
    return res.status(401).json({ msg: "Not authorized" })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.userId = decoded.id
    req.role = decoded.role
    next()
  } catch (error) {
    res.status(401).json({ msg: "Invalid token" })
  }
}
