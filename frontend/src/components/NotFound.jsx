import React from 'react'
import image from '../assets/images/notfound.gif'
import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div className=' h-[1200px]'>
      <img src={image} alt="" srcset="" className='relative left-[340px]  ' />
      <Link to="/" className='btn relative left-[650px] text-2xl underline hover:underline-offset-4'>Back to home</Link>
    </div>
  )
}
