  import React from 'react'
  import img from '../assets/images/Signup.png'
  import '../assets/css/Login.css'
  import LabelButton from '../components/LabelButton'
  import { useState } from 'react'
  import InputButton from '../components/InputButton'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
  function Signup() {
      const [username,setUsername]=useState()
      const [password,setPassword]=useState()
      const [email,setEmail]=useState()
      const [phone_number,setPhoneno]=useState()
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
      const navigate=useNavigate()
      const handleClick=async (e)=>{
        
          e.preventDefault()
          alert("button clicked")
  
          if(!username|!password){
            alert("Please fill all fields")
            return
          }console.log(phone_number);
          
        await axios.post('http://localhost:1234/auth/signup',{username,password,phone_number,email},{
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
          <div className='mainimag' style={{height:"100px"}}>
          <img src={img} alt="" className='' id='img'/>

          </div>
          <div>

        <h1 className='logintext' style={{top:"150px",fontFamily:"sans-serif"}}>
          Create New Account
        </h1>
        <p className='logintext1' style={{top:"189px"}}> please enter details</p>
      <div style={{position:"absolute",left:"1000px",top:"230px"}}>  
        <LabelButton label="Username" name="Username"  />
        <InputButton type="text" name="username" id="username" className='button' onChange={(e)=>{setUsername(e.target.value)}} />
<LabelButton label="Password" name='Password'></LabelButton>
<InputButton type="password" name="password" id="password" className='button' onChange={(e)=>setPassword(e.target.value)}></InputButton>
        <LabelButton label="Email" name="Email" />
        <InputButton type="text" name="email" id="email" className='button' onChange={(e)=>{setEmail(e.target.value)}}/>
      <LabelButton label="Phone number" name="Phone_no"></LabelButton>
      <InputButton type="text" name="phone_no" id="phone_no" className='button' onChange={(e)=>{setPhoneno(e.target.value)}}/>

        </div>
        <Link to="/" style={{"position":"absolute",top:"500px",left:"1150px"}}>Already have account?</Link>
<br />
<br /> <br />    
   <input type="button" value="Signup" className='LoginButton ' style={{"position":"absolute",top:"520px",left:"990px",margin:"2px"}} onClick={handleClick}/>
        </div>
      </div>
    )
  }

  export default Signup
