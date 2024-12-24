const { faker, tr } = require('@faker-js/faker');
const mysql=require("mysql2");
const express=require("express");
const app=express();
const methodOverride=require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password:'root'
  });
   
  app.get("/",(req,res)=>{
    let q=`select count(*) from user`;
    try{
      connection.query(q,(err,result)=>{
        if(err) throw err;
        console.log(result);
        let count=result[0]["count(*)"];
        res.render("home",{count});
      });
    }catch(err){
       console.log(err);
       res.send("some error");
    }
  });

  app.get("/user",(req,res)=>{
      let q=`select * from user`;
      try{
         connection.query(q,(err,users)=>{
         if(err) throw err;
        //  console.log(result);
         res.render("user",{users});
         });
      }catch(err){
        console.log(users);
        res.send(users);
      }
  });

  app.get("/user/:id/edit",(req,res)=>{
    let {id}=req.params;
    let q=`select * from user where id='${id}'`;
    try{
      connection.query(q,(err,result)=>{
      if(err) throw err;
      let user=result[0];
      res.render("edit",{user});
      });
   }catch(err){
     console.log(result);
     res.send(result);
   }
  })

app.patch("/user/:id",(req,res)=>{
  let {id}=req.params;
    let {password,name}=req.body;
    let q=`select * from user where id='${id}'`;
    console.log(name);
  //   try{
  //     connection.query(q,(err,result)=>{
  //     if(err) throw err;
  //     let user=result[0];
  //     if(fp==user.password){
  //       res.send("wrong password");
  //     }else{
  //       let q2=`update user set name='${fu}' where id='${id}'`;
  //       connection.query(q2,(err,result)=>{
  //         if(err) throw err;
  //         res.redirect("/user");
  //       });
  //     }
  //     });
  //  }catch(err){
  //    console.log(err);
  //    res.send("db error");
  //  }  
});


app.listen("3000",()=>{
  console.log("listening on port 3000");
});
 

  // connection.end();
  

// let getRandomUser=()=> {
//     return {
//       userId: faker.string.uuid(),
//       username: faker.internet.username(), // before version 9.1.0, use userName()
//       email: faker.internet.email(),
//       password: faker.internet.password(),
//     };
//   };


  // console.log(getRandomUser());