import React, { useState } from 'react'
import img from '../assets/images/Login.png'
import '../assets/css/Login.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Login() {
  const [username,setusername]=useState()
  const [password,setPassword]=useState()

    const navigate=useNavigate()
    const [isAuthenticated, setIsAuthenticated] = React.useState({});
    React.useEffect( () => {
      console.log("sdfasdfasdfasdfasdfasdf");
      
       axios.get("http://localhost:1234/auth/cookie/")
       .then((response)=>{
        setIsAuthenticated(response.data)
        console.log("succesfully got",response.data)
        
      
      })
    .catch((err)=>{
        console.log(err);
        
    })
},[])
      
    const handleClick=async (e)=>{
        e.preventDefault()

        if(!username|!password){
          alert("Please fill all fields")
          return
        }
      await axios.post('http://localhost:1234/auth/login',{username,password},{
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then((response) => {
            alert("login sucess")
            localStorage.setItem("AccessToken",isAuthenticated)
            
    window.dispatchEvent(new Event("storage"));
    
            navigate("/home",{state:{username}})
        })
        .catch((err) => {
            console.error('Error loggin data:', err);
            alert("error while loging")
        });

    }
  
  return (
    <div>
   
      <div style={{height:"100px"}}>
                  <img src={img} alt="" className='' id='img'  />
                  </div>
      <h1  className='logintext '>Welcome <h1 className='animate-[wiggle_1s_ease-in-out_infinite] relative top-[-27px] left-[70px]' > 👋 </h1> </h1>
      <p className='logintext1'> please login here</p>
      <br />
      <br />
      <div className='logindivinput'>

        <label htmlFor="email">username</label><br />
        <input type="text" name="email" id="email" className='border-solid border-slate-800	 border-solid border-2 rounded shadow hover:shadow-lg ' onChange={(e)=>{setusername(e.target.value)} }
        style={{width:"300px",height:"35px"}}
        />
        <br />
        <br />
        <label htmlFor="Password" style={{"padding":"1px",margin:"2px"}}>Password</label><br />
        <input type="text" name="Password" id="Password" className='border-solid border-slate-800	 border-solid border-2 rounded shadow hover:shadow-lg'   style={{width:"300px",height:"35px"}}  onChange={(e)=>{
          setPassword(e.target.value)
        }}/><br /><br /><br />
        <div  >
        <p style={{position:'relative',left:"150px",bottom:"35px"}}>  <Link to="/signup">don't have account ? </Link>
     
        </p>
    {/* <p style={{position:"relative",left:"170px",bottom:"70px",opacity:"60%"}}>Forgot Password</p> */}
    <br />
    
    <input type="button" value="Login" className='LoginButton' onClick={handleClick}/>
    </div>

      </div>    
    </div>
  )
}
