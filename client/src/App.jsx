import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextField from '@mui/material/TextField';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Createuser from './createuser';
import UpdateUser from './Updateuser';
import Users from './Users';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users></Users>}></Route>
        <Route path='/create' element={<Createuser></Createuser>}></Route>
        <Route path='/update/:id' element={<UpdateUser></UpdateUser>}></Route>
      </Routes>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App

