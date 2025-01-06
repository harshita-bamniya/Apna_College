const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listingSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    image:{
        type:String,
        default:"https://unsplash.com/photos/a-row-of-colorful-buildings-in-a-city-nDum9PC0wOg",
        set: (v)=>v===""?"https://unsplash.com/photos/a-row-of-colorful-buildings-in-a-city-nDum9PC0wOg":v,
    },
    price:Number,
    location:String,
    country:String
})

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;