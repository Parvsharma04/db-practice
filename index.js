const express = require('express')
const app = express();
const port= 5500;   
const User=require('./config');
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://gulerian282:nikhilmongo@cluster0.veda7mu.mongodb.net/login').then(res=>{
    console.log("DataBase connected sucessfully'")
}).catch(err=>{
    console.log('thukaab of DATABASE')
})


//convert data into json format
app.use(express.json());

app.use(express.urlencoded({extended: false}));



app.get("/", (req, res) =>{
    res.render('login.ejs')
});

app.get("/signup",(req, res) =>{
    res.render('signup.ejs')
});
 
app.post("/signup", async (req , res) => {
   const data= {
     name: req.body.username,
     password:req.body.password
   }
   await User.create(data);
   console.log("userdata");
})



app.listen(port,()=> {
    console.log(`server is running on port ${port}`)
})