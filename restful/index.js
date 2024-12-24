const express=require("express");
const app=express();

let port=3000;
const { v4: uuidv4 } = require('uuid');


app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));

let posts=[{
    id:uuidv4(),
    username:"prachi",
    content:"hey i am prachi"},
    {id:uuidv4(),
    username:"diya",
    content:"hey i am diya"},
    {id:uuidv4(),
    username:"anmol",
    content:"hey i am anmol"}
]

app.get("/posts/new",(req,res)=>{
    res.render("new");
})

app.get("/posts",(req,res)=>{
   res.render("index",{posts});
})


app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content});
    // res.send("sending post");
    res.redirect("/posts");
})

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("show",{post});
})

app.listen(port,()=>{
    console.log(`listening on ${port}`);
})