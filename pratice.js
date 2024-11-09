const express = require('express');
const fs = require('fs');
const app = express();

app.get('',(req,res)=>{
    res.send("hello rohit rana is this")
})
app.lestion(3000,(req,res)=>{
    console.log("hello rohit rana ")
})