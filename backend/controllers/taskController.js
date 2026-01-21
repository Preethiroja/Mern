const Task=require('../models/task')

exports.createTask=async(req,res)=>{
  try{
    const task=await Task.create({
        title:req.body.title,
        description:req.body.description,
        status:req.body.status||'pending',
        user:req.userId
    })
    res.status(201).json({msg:"task created Successfully",task})
  }catch(error){
    res.status(300).send(error)
  }
}