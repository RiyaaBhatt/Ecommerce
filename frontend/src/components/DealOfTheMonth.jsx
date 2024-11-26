// import React from 'react'
// import Counter from './Counter'
// import Countdown from 'react-countdown'
// import right from '../assets/images/rightwhite.svg'
// import img from '../assets/images/women.png'
// import img1 from '../assets/images/Signup.png'
// import img2 from '../assets/images/Login.png'
// import img3 from '../assets/images/kids.png'
// export default function DealOfTheMonth() {
//     const images=[img,img1,img2,img3]
//   return (
//     <div>
//        <h1 className='text-4xl relative  left-[200px] font-normal py-6'> Deal of Month</h1>
//        <p className='text-2xl relative left-[200px] font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/> Maiores ab sint pariatur beatae voluptatem ratione dolor qui,,<br /> vitae animi autem, id inventore accusantium veniam?
//        </p>
//         <div className='relative right-[380px] font-normal py-2'>
//         <Countdown date={Date.now() + 500000000} renderer={Counter}>
        
//         </Countdown>
//         </div>
//         <button class="bg-black	text-white rounded-lg my-5 py-3 px-6 flex right-1.5 relative cursor-pointer relative  left-[190px] " >View All Product <img src={right} alt="" className='h-3 mx-1 my-1.5 ' /></button>
  
//       {
//        images.map((img)=>{
//         return <div>
//             <div className='relative h-[100px] w-[80px] left-[990px] bottom-[380px] flex flex-row '>
//                 <img src={img} alt="" />
//                 </div>
//         </div>
//        })
       
//       }
//       {       new Array(4).fill(4).map(()=>{
//         return <div>
//             <div className='relative h-[100px] w-[80px] left-[1058px] bottom-[780px] flex flex-row '>
//                 <img src={img} alt="" />
//                 </div>
//         </div>
//        })
//        }
// {       new Array(4).fill(4).map(()=>{
//         return <div>
//             <div className='relative h-[100px] w-[80px] left-[1130px] bottom-[1180px] flex flex-row '>
//                 <img src={img} alt="" />
//                 </div>
//         </div>
//        })
//        }
//       {       new Array(4).fill(4).map(()=>{
//         return <div>
//             <div className='relative h-[100px] w-[80px] left-[1210px] bottom-[1580px] flex flex-row '>
//                 <img src={img} alt="" />
//                 </div>
//         </div>
//        })
//        }
//     </div>
//   )
// }
// import React, { useState, useEffect } from "react";
// import Countdown from "react-countdown";
// import right from "../assets/images/rightwhite.svg";
// import img from "../assets/images/women.png";
// import img1 from "../assets/images/Signup.png";
// import img2 from "../assets/images/Login.png";
// import img3 from "../assets/images/kids.png";
// import Counter from "./Counter";

// export default function DealOfTheMonth() {
//   const initialImages = [img, img1, img2, img3];
//   const [images, setImages] = useState(initialImages);

//   const countdownDate = useRef(Date.now() + 500000000);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setImages((prevImages) => [...prevImages].sort(() => Math.random() - 0.5));
//     },1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       <h1 className="text-4xl relative btn left-[200px] font-normal py-6">
//         Deal of Month
//       </h1>
//       <p className="text-2xl relative left-[200px] font-light">
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//         <br /> Maiores ab sint pariatur beatae voluptatem ratione dolor qui,
//         <br /> vitae animi autem, id inventore accusantium veniam?
//       </p>
//       <div className="relative right-[380px] font-normal py-2">
//              <Countdown date={Date.now() + 500000000} renderer={Counter}>
        
//                </Countdown>
//       </div>
//       <button className="bg-black text-white rounded-lg my-5 py-3 px-6 flex right-1.5 relative cursor-pointer relative left-[190px]">
//         View All Product <img src={right} alt="" className="h-3 mx-1 my-1.5 " />
//       </button>

//       {/* Animated Images */}
    //   <div className="relative flex justify-center space-x-6 my-8 bottom-[350px] left-[380px]">
    //     {images.map((img, index) => (
    //       <div
    //         key={index}
    //         className="relative h-[100px] w-[100px] rounded-lg overflow-hidden transform transition-all duration-1000 hover:scale-105"
    //       >
    //         <img
    //           src={img}
    //           alt=""
    //           className="h-full w-full object-cover rounded-lg shadow-md"
    //         />
    //       </div>
    //     ))}
    //   </div>
    //   <div className="relative flex justify-center space-x-6 my-8 bottom-[379px] left-[380px]">
    //     {images.map((img, index) => (
    //       <div
    //         key={index}
    //         className="relative h-[100px] w-[100px] rounded-lg overflow-hidden transform transition-all duration-1000 hover:scale-105"
    //       >
    //         <img
    //           src={img}
    //           alt=""
    //           className="h-full w-full object-cover rounded-lg shadow-md"
    //         />
    //       </div>
    //     ))}
    //   </div>
    //   <div className="relative flex justify-center space-x-6 my-8 bottom-[398px] left-[380px]">
    //     {images.map((img, index) => (
    //       <div
    //         key={index}
    //         className="relative h-[100px] w-[100px] rounded-lg overflow-hidden transform transition-all duration-1000 hover:scale-105"
    //       >
    //         <img
    //           src={img}
    //           alt=""
    //           className="h-full w-full object-cover rounded-lg shadow-md"
    //         />
    //       </div>
    //     ))}
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect, useRef } from "react";
import Countdown from "react-countdown";
import right from "../assets/images/rightwhite.svg";
import img from "../assets/images/women.png";
import img1 from "../assets/images/Signup.png";
import img2 from "../assets/images/Login.png";
import img3 from "../assets/images/kids.png";
import Counter from "./Counter";
import m1 from '../assets/images/m1.png'
import m2 from '../assets/images/m2.png'
import m3 from '../assets/images/m3.png'
import m4 from '../assets/images/m4.png'
export default function DealOfTheMonth() {
  const initialImages = [img, img1, img2, img3];
  const [images, setImages] = useState(initialImages);

  const countdownDate = useRef(Date.now() + 500000000);

  useEffect(() => {
    const interval = setInterval(() => {
      setImages((prevImages) => [...prevImages].sort(() => Math.random() - 0.5));
    }, 700);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 className="text-4xl relative btn left-[200px] font-normal py-6">
        Deal of Month
      </h1>
      <p className="text-2xl relative left-[200px] font-light">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        <br /> Maiores ab sint pariatur beatae voluptatem ratione dolor qui,
        <br /> vitae animi autem, id inventore accusantium veniam?
      </p>
      <div className="relative right-[380px] font-normal py-2">
        <Countdown date={countdownDate.current} renderer={Counter} />
      </div>
      <button className="bg-black rounded-md text-white  my-5 py-3 px-6 flex right-1.5 relative cursor-pointer relative left-[190px]">
        View All Product <img src={right} alt="" className="h-3  rounded-md mx-1 my-1.5 " />
      </button>

      
      <div className="relative flex justify-center space-x-6 my-8 bottom-[350px] left-[380px]">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative h-[100px] w-[100px] overflow-hidden transform transition-all duration-1000 hover:scale-105"
          >
            <img
              src={img}
              alt=""
              className="h-full w-full object-cover  shadow-md"
            />
          </div>
        ))}
      </div>
      <div className="relative flex justify-center space-x-6 my-8 bottom-[379px] left-[380px]">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative h-[100px] w-[100px] rounded-md overflow-hidden transform transition-all duration-1000 hover:scale-105"
          >
            <img
              src={img}
              alt=""
              className="h-full w-full object-cover rounded-mdshadow-md"
            />
          </div>
        ))}
      </div>
      <div className="relative flex justify-center space-x-6 my-8 bottom-[398px] left-[380px]">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative h-[100px] w-[100px] rounded-md overflow-hidden transform transition-all duration-1000 hover:scale-105"
          >
            <img
              src={img}
              alt=""
              className="h-full w-full object-cover rounded-md shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
