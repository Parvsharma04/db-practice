const mongoose=require('mongoose')
const connect=mongoose.connect("mongodb+srv://gulerian282:<nikhilmongo>@cluster0.veda7mu.mongodb.net/login");
//data base checking
connect.then(() => {
    console.log('DataBase connected sucessfully');
})
.catch(() => {
    console.log('DataBase not connected thukab ho gya ha');
})

const Schema=mongoose.Schema
const userSchema=new Schema({
    name:{
       type: String,
       required: true
    },
    password:{
        type:String,
        required:true
    }
    // phone:String,
    // address:String,
    // city:String,
    // state:String,
})
const collection =mongoose.model("details",userSchema);
module.exports=collection;

