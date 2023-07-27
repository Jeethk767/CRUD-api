import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Createuser from './createuser';
import UpdateUser from './Updateuser';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3005')
      .then((result) => setUsers(result.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const handledelete=(id)=>{
    axios.delete('http://localhost:3005/deleteuser/'+id)
    .then((result)=>{
        console.log(result)
        window.location.reload()
    })
    .catch((error)=>{
        console.log(error)
    })
  }

  

  return (
    <div style={{
        height:"100vh",
        width:"100vw",
        backgroundColor: "#f0f8ff"
    }}>
      <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          
        
      }}>
        {users.map((user) => (
          <Card key={user.email} style={{
            width: "300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            
            marginRight:"20px",
            marginTop:"10px"
             // Added some margin between each card
          }}>
            <TextField
              label="Name"
              value={user.name}
              disabled
              style={{ marginBottom: "10px" }}
            />
            <TextField
              label="Email"
              value={user.email}
              disabled
              style={{ marginBottom: "10px" }}
            />
            <TextField
              label="Password"
              value={user.password}
              disabled
              style={{ marginBottom: "10px" }}
            />
            <div style={{
              display: "flex",
              marginTop: 10,
            }}>
              <Button variant="outlined" style={{
                marginRight: 10
              }} onClick={() => (window.location = `/update/${user._id}`)}>Edit</Button>
              <Button variant="outlined"
              onClick={()=>handledelete(user._id)}>Delete</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Users;