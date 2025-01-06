const mongoose = require('mongoose');

main()
.then(res=> console.log("sucessfull"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relation');
}

const userSchema=new mongoose.Schema({
    username:String,
    address:[{
        location:String,
        city:String,
    }]
})

const User=mongoose.model("User",userSchema);

const addUser=async ()=>{
    const user1=new User({
        username:"harshita",
        address:[{
            _id:false,
            location:"silicon city",
            city:"indore"
        }]
    })

    user1.address.push({location:"police colony",city:"mandsaur"});
    const result= await user1.save();
    console.log(result);
}

addUser();