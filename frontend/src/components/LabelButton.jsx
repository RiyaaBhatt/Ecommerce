import React from 'react'

export default function LabelButton(props) {
  return (
    <div>
       <label htmlFor={props.label} style={{"padding":"1px",margin:"2px"}} >{props.name}</label>
    </div>
  )
}
