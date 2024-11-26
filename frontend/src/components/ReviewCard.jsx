import React from 'react'
import star from '../assets/images/star.svg'

export default function ReviewCard() {
    var random=Math.floor(Math.random(2,5)*6)
    if(random!==5){
        random=random+1
    }
  
  
    
  return (
    <div>
      <div className='bg-white h-[200px] w-[300px]  shadow-md  px-2'>
     
        <span className='flex flex-wrap py-2 gap-1 '>{new Array(random).fill(random).map(()=>{
    return <img src={star} alt="" className='h-[15px]' />
                      })
        }</span>
        Lorem ipsum dolor sit amet consectetur adipisicing .
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, architecto.
       Lorem ipsum dolor sit amet. 
        </div>
     <div className='cardtext relative bottom-[50px] left-[10px]' >
        <h1 className='text-base font-extrabold '>Jacob Jones</h1>
        <h1 className='text-sm font-light'>Software Devloper</h1>
     </div>
    </div>
  )
}
