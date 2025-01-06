const mongoose = require('mongoose');

main()
.then(res=> console.log("sucessfull"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relation');
}

const customerSchema=new mongoose.Schema({
    item:String,
    price:Number
})

const Order=mongoose.model("Order",customerSchema);

const orderSchema=new mongoose.Schema({
    name:String,
    order:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order",
    }]
})


const Customer=mongoose.model("Customer",orderSchema);

// const addOrder=async()=>{
//     let res=await Order.insertMany([{item:"chips",price:10},{item:"chocolate",price:20}]);
//     console.log(res);
// }

const addOrder=async()=>{
    let cust1=new Customer({
        name:"ram"
    })

    let order1=await Order.findOne({item:"chips"});
    let order2=await Order.findOne({item:"chocolate"});

    cust1.order.push(order1);
    cust1.order.push(order2);

    let res=await cust1.save();
    console.log(res);
}

addOrder();