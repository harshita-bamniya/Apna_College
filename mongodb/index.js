const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Chat=require("./model/chat.js");
const port=3000;
const methodOverride=require("method-override");

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(methodOverride("_method"));

main()
.then(()=>{
    console.log("connection sucessfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsap');
}

// let chat=new Chat({
//     from:"Neha",
//     to:"Sneha",
//     msg:"how are you",
//     created_at:new Date()
// })

// chat.save() 
// .then((res)=>{
//     console.log(res);
// })

app.get("/chats",async (req,res)=>{
    let chat=await Chat.find();
    res.render("chats",{chat});
})

app.get("/chat/new",(req,res)=>{
    res.render("new");
})

app.post("/chats",(req,res)=>{
    let {from,msg,to}=req.body;
    let chat=new Chat({
        from:from,
        msg:msg,
        to:to,
        created_at:new Date()
    });
    chat.save()
    .then((res)=>{
         console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })
    res.redirect("chats");
})

app.get("/chat/:id/edit",async(req,res)=>{
    let {id}=req.params;
    let chats=await Chat.findById(id);
    res.render("edit",{chats});
})

app.put("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let {msg:newMsg}=req.body;
    // console.log(newMsg);
    let updateChat=await Chat.findByIdAndUpdate(id,{msg:newMsg},
    {runValidators:true,new:true});
    // console.log(updateChat);
    res.redirect("/chats");
})

app.delete("/chat/:id",async(req,res)=>{
    let {id}=req.params;
    let chat=await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
})

app.get("/",(req,res)=>{
    res.send("welcome"); 
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});