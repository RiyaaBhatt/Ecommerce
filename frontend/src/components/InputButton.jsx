import React, { useState } from 'react'
import '../assets/css/Login.css'
export default function InputButton(props) {
   
  const {type,name,id,className,onChange}=props
   
  return (
    <div>
             
              <input type={type} name={name} id={id} className="border-solid border-slate-800	 border-solid border-2 rounded shadow hover:shadow-lg " onChange={onChange}   style={{width:"300px",padding:"4px",height:"35px"}}/>


      
    </div>
  )
}
