import { Typography,Card,TextField,Button } from "@mui/material"
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'

import { useState,useEffect} from "react"




function UpdateUser(){
    const {id}=useParams()
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate = useNavigate()
   

    useEffect(()=>{
        axios.get('http://localhost:3005/getuser/'+id)
        .then((result)=>{
            console.log(result)
            setName(result.data.name)
            setEmail(result.data.email)
            setPassword(result.data.password)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])

    const handlenamechange=(e)=>{
        setName(e.target.value)
      }
    
      const handleemailchange=(e)=>{
        setEmail(e.target.value)
      }
    
      const handlepasswordchange=(e)=>{
        setPassword(e.target.value)
      }



      
    const Update=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3005/updateuser/'+id,{name,email,password})
        .then((result)=>{
            console.log(result)
            navigate('/')
        })
        .catch((err)=>console.log(err))
    }



  return(
    <div style={{
        height:"100vh",
        width:"100vw",
        backgroundColor:"#f0f8ff"
    }}>
      <div style={{
        display:"flex",
        justifyContent:"center",
        paddingTop: 150
      }}>
      <Typography > You Can Update the following fields</Typography>
      </div> 
        <div style={{
          display: "flex",
          justifyContent: "center",
          
        }}> 
          <Card style={{
            display: "flex",
            flexDirection: "column", // Added to stack content vertically
            justifyContent: "space-between", // Added to create space between content
            alignItems: "center", // Center content horizontally
            width: 400,
            minHeight: 270
          }}>
            <div>
              <TextField
                id="outlined-password-input"
                
                value={name}
                type="Name"
                onChange={handlenamechange}
                autoComplete="current-password"
                 style={{
                  width:300,
                  marginTop:20
                }}
              />
              <br /><br />
              <TextField
                id="outlined-password-input"
                
                type="Email"
                value={email}
                autoComplete="current-password"
                onChange={handleemailchange}
                style={{
                  width:300
                }}
              />
              <br /><br />
              <TextField
                id="outlined-password-input"
                type="password"
                value={password}
                autoComplete="current-password"
                onChange={handlepasswordchange}
                style={{
                  width:300
                }}
              />
            </div>
            <div style={{
              marginBottom:"10px"
            }}>
              <Button onClick={Update}>Update</Button>
            </div>
          </Card>
        </div>
      </div>
  )
}

export default UpdateUser