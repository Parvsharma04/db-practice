const mongoose=require('mongoose')

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

