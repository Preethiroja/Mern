const Task=require('../models/task')

exports.createTask=async(req,res)=>{
  try{
    const task=await Task.create({
        title:req.body.title,
        description:req.body.description,
        status:req.body.status||'pending',
        user:req.userd
    })
    res.status(201).json({msg:"task created Successfully",task})
  }catch(error){
    res.status(300).send(error)
  }
}
exports.getTasks=async(req, res) => {
  try {
    const tasks=await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.getTask=async(req, res) => {
  try {
    const tasks=await Task.findOne({user:req.userId });
    res.json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.getTasksById=async(req,res)=>{
  try{
    const tasks=await Task.find({
    _id:req.params.id,
    user:req.userId
  })
  res.json(tasks)
  }catch(error){
    res.json(error)
  }
}

exports.updateTask=async(req,res)=>{
  try{
    const task=await Task.findOneAndUpdate({
    _id:req.params.id,
    user:req.userId,
   },
   {
    title:req.body.title,
    description:req.body.description,
    status:req.body.status
   },{new:true});
   if(!task){
    res.json({msg:"No task Exist"})
   }
   res.json(task);
  }catch(error){
    res.send(error)
  }
}

exports.deleteTask=async(req,res)=>{
  try{
    const task=await Task.findOneAndDelete({
      _id:req.params.id,
      user:req.user.id
    })
    if(!task){
      res.json({msg:"No task Exist"})
    }
    res.json({msg:"Task deleted successfully", task})
  }catch(error){
    res.send(error)
  }
}