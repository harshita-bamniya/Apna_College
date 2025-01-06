const mongoose=require("mongoose");
const Chat=require("./model/chat.js");

main()
.then(()=>{
    console.log("connection sucessfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsap');
}

let chats=[{
    from:"subh",
    to:"prachi",
    msg:"hii prachi",
    created_at:new Date()},
    {
    from:"prachi",
    to:"subh",
    msg:"yeah hi subh",
    created_at:new Date()},
    {
    from:"anmol",
    to:"maya",
    msg:"hii i am anmol",
    created_at:new Date()
    }]

Chat.insertMany(chats);

// let chat=new Chat({
//     from:"Neha",
//     to:"Sneha",
//     msg:"how are you",
//     created_at:new Date()
// })

