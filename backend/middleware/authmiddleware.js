const jwt=require("jsonwebtoken")
exports.protect=(req,res,next)=>{
    const token=req.headers.authorization.split(' ')[1]
    if(!token){
        res.status(400).json({msg:"not authorized"})
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        req.user=decoded
        next()//only used in middleware
    }catch(error){
        res.send("Invalid token");
    }
}