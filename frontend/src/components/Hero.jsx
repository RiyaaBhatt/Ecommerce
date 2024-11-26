import React from 'react'
import right from '../assets/images/rightwhite.svg'
import home from '../assets/images/Home.png'
export default function Hero() {
  return (
    <div>
        <div className=' h-3 w- m-full min-h-screen min-w-screen' style={{backgroundColor:"#f0f0f0"

}}>
    <div className='z-50' style={{"position":"absolute","bottom":"200px",left:"260px"}}>
        <div>
   <h1 className='text-6xl'>Classic Exlusive</h1><br />
   <h1 className='text-6xl font-extrabold	'>Women's Collection</h1><br />
   <h1 className='font-light text-3xl'>UPTO 40% OFF</h1></div>
   <button class="bg-black	text-white rounded-lg m-2 py-3 px-6 flex right-1.5 relative cursor-pointer" >Shop Now <img src={right} alt="" className='h-3 mx-1 my-1.5 ' /></button>
  
    </div>
    <div>
        <img src={home} alt="" className='h-[730px] ' style={{"position":"relative",left:"950px"}}/>
        </div>
<div className='text-[200px] text-white font-normal outline-white outline-2 opacity-50 z-40' style={{position:"relative",left:"460px",bottom:"230px"}}>
    <h1>BEST</h1>
</div>
        </div>
      
        
    </div>
  )
}
