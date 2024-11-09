const express = require("express")
const app =express();
const bodyparser = require("body-parser");
const cors = require("cors");

const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000
const ErrorHandler = require("./middleware/errorHandler")
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


app.use(cors());

app.get("/home",(req,res)=>{
    res.send("MY hOME paFEW")
})

app.get("/about",(req,res,next)=>{
    try{
        let a =10;
        let b=0
        if(b==0){
            throw new Error("App Zero se Divide na Kare!!!");
        }
        let c = a/b;
        res.status(200).send({ans:c})
    }catch(error){
        next(error)
    }
})

app.get("/service",(req,res,next)=>{
     // code may generate Error
    
    const err  = new Error("ye Servie ka Error message Hai!!");
    next(err)
})  

app.get("/join",(req,res)=>{
      res.send("My Join  Page")
})

app.get("/cont",(req,res,next)=>{
    const errr = new Error("Ye Contect page ki errhai");
       next(errr)
})
app.use(ErrorHandler)
app.listen(port ,()=>{
    console.log(`Server Run  On Port ${port}`)
})

