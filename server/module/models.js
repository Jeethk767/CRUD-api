const mongoose=require('mongoose')

const UserSchema=mongoose.Schema({//creating a schema
    name:String,
    email:String,
    password:String
})

const UserModel=mongoose.model("user",UserSchema)//creating a model
module.exports=UserModel