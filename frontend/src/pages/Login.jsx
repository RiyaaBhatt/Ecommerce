import React, { useState } from 'react'
import img from '../assets/images/Login.png'
import '../assets/css/Login.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Login() {
  const [Username,setUsername]=useState()
  const [Password,setPassword]=useState()

    const navigate=useNavigate()
    const handleClick=async (e)=>{
        e.preventDefault()
        alert("clicked button")
      await axios.post('http://localhost:1234/auth/login',{Username,Password},{
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then((response) => {
            alert("login sucess")
            
            navigate("/home",{state:{Username}})
        })
        .catch((err) => {
            console.error('Error loggin data:', err);
            alert("error while loging")
        });

    }
  
  return (
    <div>
                  <img src={img} alt="" className='mainimag' id='img'/>

      <h1  className='logintext'>Welcome 👋  </h1>
      <p className='logintext1'> please login here</p>
      <br />
      <br />
      <div className='logindivinput'>

        <label htmlFor="email">Username</label><br />
        <input type="text" name="email" id="email" className='button' onChange={(e)=>{setUsername(e.target.value)}}/>
        <br />
        <br />
        <label htmlFor="Password" style={{"padding":"1px",margin:"2px"}}>Password</label><br />
        <input type="text" name="Password" id="Password" className='button' onChange={(e)=>{
          setPassword(e.target.value)
        }}/><br /><br />
        <div  >
        <input type="checkbox" name="" id="" style={{padding:""}}  />
        <p style={{position:'relative',left:"20px",bottom:"37px",fontFamily:"Noto Sans Devanagari UI SemiCondensed"}}>Remember Me</p>
    {/* <p style={{position:"relative",left:"170px",bottom:"70px",opacity:"60%"}}>Forgot Password</p> */}
    <br />
    <input type="button" value="Login" className='LoginButton' onClick={handleClick}/>
    </div>
      </div>
    </div>
  )
}
