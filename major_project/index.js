const express=require("express");
const app=express();
const mongoose=require("mongoose");
const listing=require("./models/listing");
const methodOverride=require("method-override");
let port=3000;

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

main()
.then(res=>{
    console.log("connected to db");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}


app.get("/",(req,res)=>{
    res.send("on root");
})

// app.get("/listing",async(req,res)=>{
//    let sample=new listing({
//     title:"villa",
//     description:"my new villa",
//     price:1200,
//     location:"goa",
//     country:"india"
//    })
//    await sample.save();
//    console.log(sample);
//    res.send("successfull");
// })

app.get("/listing",async(req,res)=>{
     const list= await listing.find({});
     res.render("index.ejs",{list});
})

app.get("/listing/new",(req,res)=>{
    res.render("new.ejs");
})

app.get("/listing/:id",async(req,res)=>{
    let {id}=req.params;
    const list=await listing.findById(id);
    res.render("show.ejs",{list});
})

app.post("/listing",async(req,res)=>{
    let nlisting=new listing(req.body.listing);
    await nlisting.save();
    res.redirect("/index.ejs");
})

app.delete("/listing/:id",async (req,res)=>{
    let {id}=req.params;
    let deletelist=await listing.findByIdAndDelete(id);
    res.render("index.ejs");
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})