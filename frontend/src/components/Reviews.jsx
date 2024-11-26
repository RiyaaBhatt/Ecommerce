import React from 'react'
import ReviewCard from './ReviewCard'

export default function Reviews() {

  return (
    <div className='bg-["f0f0f0"]  relative bottom-[350px] h-[350px] ' style={{backgroundColor:"#f0f0f0"}} >
    <h1 className='text-4xl relative left-[200px] py-4'>What Our customer's say</h1>
   <div className='flex flex-wrap relative  left-[340px] gap-3 py-[20px]'>
    {new Array(3).fill(0).map(()=>{
      return <ReviewCard/>
    })}</div>
    </div>
  )
}
