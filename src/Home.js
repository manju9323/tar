
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./App.css"
const Home =() => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")


  const submit=async(e)=>{
    console.log({name,email,password})
  }

  return (
    <div className='login'>
      <div className='loginform'>
    <div className='label'><label>name</label><input type="text"  value={name}  onChange={(e)=>{setName(e.target.value)}} /></div>
    <div className='label'> <label>email</label><input type="email"  value={email}  onChange={(e)=>{setEmail(e.target.value)}} /></div>
    <div className='label'> <label>password</label><input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} /></div>
    <button onClick={submit}>Submit</button> <Link to="/book"><button>Home</button></Link>
    </div>
    </div>
  )
}

export default Home


  
