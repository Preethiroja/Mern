const express = require("express")
const router = express.Router()

const { protect } = require("../middleware/authMiddleware1")
const { adminOnly } = require("../middleware/roleMiddleware")
const {
  createStudent,
  updateStudent,
  deleteStudent,
  getAllStudents
} = require("../controllers/adminController")

router.post("/student", protect, adminOnly, createStudent)
router.put("/student/:id", protect, adminOnly, updateStudent)
router.delete("/student/:id", protect, adminOnly, deleteStudent)
router.get("/students", protect, adminOnly, getAllStudents)

module.exports = router
