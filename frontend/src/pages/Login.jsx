  import React, { useState } from 'react'
  import img from '../assets/images/Login.png'
  import '../assets/css/Login.css'
  import { Link } from 'react-router-dom'
  import { useNavigate } from 'react-router-dom'
  import { useAlert,positions} from 'react-alert'

  import axios from 'axios'
  import { useDispatch } from 'react-redux'
  import { createuser } from '../app/reducers/UserSlice'
  export default function Login() {
    const [username,setusername]=useState()
    const [password,setPassword]=useState()
    const [role,setRole]=useState()
    const alert = useAlert()
    const dispatch=useDispatch()

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
        
  //     const handleClick=async (e)=>{
  //         e.preventDefault()

  //         if(!username|!password){
  //           alert("Please fill all fields")
  //           return
  //         }
  //         try{
  //     const response=await axios.post('http://localhost:1234/auth/login',{username,password},{
  //         headers:{
  //             "Content-Type":"application/json"
  //         }
  //     })
    
  //             alert("login sucess")
  //             localStorage.setItem("AccessToken",isAuthenticated)
              
  //     window.dispatchEvent(new Event("storage"));
  // const role=await getRole()
  //       if(role=="admin")
  //       {
  //         console.log("admin here");
          
  //         navigate("/admin",{state:{username}})
  //       }
  //     else{
  //       console.log("this is inside else");
        
  //             navigate("/home",{state:{username}})
  //       }  }
  //       catch (err) {
  //         console.error("Error logging in:", err);
  //         alert("Error while logging in");
  //     }

  //     }
  //     const getRole= async()=>{
  //       try{
  //    const response=await axios.get(`http://localhost:1234/auth/role/${username}`)
  //   setRole(response.data[0].role)
  //   console.log(response.data[0].role);
  //   return role
    
  //   }
  //    catch(err){
  //     console.log(err);
  //     return null
      
  //    }
  //     }
  const handleClick = async (e) => {
    e.preventDefault();

    if (!username || !password) {
        alert.show("Please fill all fields",{timeout: 2000});
        return;
    }

    try {
        const response = await axios.post(
            'http://localhost:1234/auth/login',
            { username, password },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        alert.show("Login success");
        
        const role = await getRole();

        if (role === "admin") {
            console.log("Admin here");
            localStorage.setItem("AccessToken", isAuthenticated.token); // Store token
        window.dispatchEvent(new Event("storage"));
        const AccessToken=isAuthenticated.token
  dispatch(createuser({username,AccessToken,role}))
            localStorage.setItem("role",role)
            navigate("/admin/user", { state: { username } });
        } else {
            console.log("This is inside else");
            
            localStorage.setItem("role","user")
            localStorage.setItem("AccessToken", isAuthenticated.token); 
        window.dispatchEvent(new Event("storage"));
        let AccessToken=isAuthenticated.token
        console.log("hi this is me accesstoken ",AccessToken);
        
  dispatch(createuser({username,AccessToken,role}))

            navigate("/home", { state: { username } });
        }
    } catch (err) {
        console.error("Error logging in:", err);
        alert.show('error while login!')

        // alert("Error while logging in");
    }
  };

  const getRole = async () => {
    try {
        const response = await axios.get(`http://localhost:1234/auth/role/${username}`);
        const role = response.data[0].role; 
        setRole(role)
        console.log(role);
        return role;
    } catch (err) {
        console.error(err);
        return null; 
    }
  };
  

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
