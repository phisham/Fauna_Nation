const express=require('express');
const path=require('path');
const app=express();
const fs=require('fs');
const req=require('request');
var server=require('http').Server(app);
const bodyParser=require('body-parser');
const { send } = require('process');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static(__dirname+'/public'));
app.get("/stepup",(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'));
})
app.post("/stepup",(req,res)=>{
    console.log("hii");
    var n=req.body.name;
    fs.writeFile('done.txt',n,function(err){
        if(err) throw err;
    })
   
})


app.listen(3000,(req,res)=>{
    console.log("server has started on port 3000");
});
