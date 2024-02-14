const express = require("express");
const app = express();
require('dotenv').config()
const bodyparser = require("body-parser");
app.use(bodyparser.json());
const {connectDB,usermodel} = require("./DBConnection");


app.get("/test",(req,res)=>{
    console.log("Coming");
    res.send("Hello World");
});

app.get("/find",async (req,res)=>{
   
    console.log("Coming");
    let result = await usermodel.find({});
    res.send(result);
})

app.post("/add",async (req,res)=>{
    usermodel.create(req.body)
    console.log("Coming");
    let result = await usermodel.find({});
    res.send(result);
})

app.patch("/update",async (req,res)=>{
    console.log(req.body);
    let s = await usermodel.findOneAndUpdate({phone:"92333"},req.body,{select:{_id:0,__v:0},new:true})
    console.log(s);
    // let result = await usermodel.find({});
    res.send(s);
})


connectDB();

app.listen(3000,()=>{
console.log("Listening on port 3000")
});

