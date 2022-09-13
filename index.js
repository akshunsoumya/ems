const express=require('express');
const app=express();
app.get("/soumya",(req,res)=>
{
    res.send("hello david!!");

});
app.listen(7000,()=>{
    console.log("server is listening on the port 7000");
});