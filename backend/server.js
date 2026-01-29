const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require("dotenv")
dotenv.config()
app.use(express.json());
//app.use(cors())

mongoose .connect(
    process.env.MONGO_URI
    )
    .then(()=>{console.log("MongoDb connected successfully")})
    .catch((err)=>{console.log(err)})
app.use('/auth',require('./routes/authRoutes'))
app.use('/task',require('./routes/taskRoutes'))

app.get('/api',(req,res)=>{
    res.send('Hi from express');
})
app.post('/api',(req,res)=>{
    const temp=req.body;
    res.send(temp); 
})
app.listen(4000,()=>{
    console.log("Server is running in the port 4000");
})