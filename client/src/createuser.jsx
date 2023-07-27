import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { TextField, Card, Button } from '@mui/material';
import Typography from '@mui/material/Typography'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Createuser() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()

  const handlenamechange=(e)=>{
    setName(e.target.value)
  }

  const handleemailchange=(e)=>{
    setEmail(e.target.value)
  }

  const handlepasswordchange=(e)=>{
    setPassword(e.target.value)
  }

  const Submit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3005/create",{name,email,password})
    .then((result)=>{
       window.alert("account created successfully")
       navigate('/')
    console.log(result)})
    .catch((error)=>console.log(error))
  }


  return (
    <>
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
      <Typography> Welcome!! Create you account below</Typography>
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
                label="Name"
                type="Name"
                autoComplete="current-password" style={{
                  width:300,
                  marginTop:20
                }}
                onChange={handlenamechange}
              />
              <br /><br />
              <TextField
                id="outlined-password-input"
                label="Email"
                type="Email"
                autoComplete="current-password"
                style={{
                  width:300
                }}
                onChange={handleemailchange}
              />
              <br /><br />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                style={{
                  width:300
                }}
                onChange={handlepasswordchange}
              />
            </div>
            <div style={{
              marginBottom:20
            }}>
              <Button onClick={Submit}>Signup</Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Createuser;