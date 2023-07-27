const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const bcrypt=require('bcrypt')
const UserModel=require('./module/models')
const app=express();
app.use(express.json());
app.use(cors())



mongoose.connect('mongodb://127.0.0.1:27017/crud')
.then(()=>{
    console.log("connected the database successfully");
})
.catch((error)=>{
  throw error;
})


app.get('/',(req,res)=>{
  UserModel.find({})
  .then((users)=>res.json(users))
  .catch((error)=>{
    console.log(error)
  })
})


app.get('/getuser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findById({_id:id})
    .then((users)=>{
        res.json(users)
    })
    .catch((error)=>
    {
        console.log(error)
    })
})


app.post('/updateuser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    .then((users)=>{
        res.json(users)
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.delete('/deleteuser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then((response)=>{
        res.json(response)
    })
    .catch((error)=>{
        res.json(error)
    })
})




app.post('/create',(req,res)=>{
  const {name,email,password}=req.body;
  UserModel.findOne({email:email})
  .then((user)=>{
    if(user){
        res.status(200).json({message:"user already present"})
      }
      else{
        bcrypt.hash(password,10,(err,hash)=>{
            if(err){
                res.status(200).json({message:"error in hashing"})
            }
            else{
                UserModel.create({
                    name:name,
                    email:email,
                    password:hash
                })
                .then(()=>{
                    res.status(200).json({message:"account created successfully"})
                })
                .catch((error)=>{
                    res.status(200).json({message:"internal server error",error})
                })
            }
        })
      }
  })
  .catch((error)=>{
    res.status(200).json({message:"internal server error",error})
  })

})



app.listen(3005,()=>{
    console.log("The server is On ");
})