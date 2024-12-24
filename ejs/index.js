const express=require("express");
const app=express();
let port=3000;


app.set("view engine","ejs");

app.get("/",(req,res)=>{
       res.render("home");
});

app.get("/rolldice",(req,res)=>{
    let dice=Math.floor(Math.random()*6)+1;
    res.render("rolldice",{dice});
});

// app.get("/ig/:username",(req,res)=>{
//     const followers=["Bob","jonny","lily","george"];
//     let {username}=req.params;
//     res.render("instagram",{username,followers});
// })

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instadata=require("./data.json");
    const data=instadata[username];
    res.render("insta",{data});
})


app.listen(port,()=>{
    console.log(`listening on ${port}`);
})