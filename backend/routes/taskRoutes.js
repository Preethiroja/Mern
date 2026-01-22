const express=require("express")
const router=express.Router()

const {createTask,getTasks,getTask,getTasksById,updateTask,deleteTask}=require("../controllers/taskController")
const {protect} =require('../middleware/authmiddleware')

router.post('/newTask',protect,createTask)
router.get('/getTasks',protect,getTasks)
router.get('/getTasks/:id',protect,getTasksById)
router.get('/getTask',protect,getTask)
router.put('/updateTask/:id',protect,updateTask)
router.delete('/deleteTask/:id',protect,deleteTask)

module.exports=router