const express=require("express");
const app=express();

let port=3000;

app.listen(3000,()=>{
   console.log(`listening on port ${port}`);
});

// app.use((req,res)=>{
//    console.log("used");
//    res.send("is it visible");
// });

// app.get("/",(req,res)=>{
//      res.send("root path");
// })

// app.get("/mango",(req,res)=>{
//     res.send("mango");
// })

app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    res.send(`welcome ${username} your id is${id}`);
});

// app.get("/search",(req,res)=>{
//     let {q}=req.query;
//     res.send(`welcome ${q}`);
// })