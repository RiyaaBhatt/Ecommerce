// import React from 'react'
// import img from '../assets/images/Signup.png'

// export default function ProductCard() {
//   return (
//     <div>
    
//       <div className="max-w-sm rounded overflow-hidden shadow-l py-4 px-5">
//   <img className="w-full h-full m-2" src={img} alt="Sunset in the mountains"/>
//   {/* <div className="px-6 py-4">
//     check out
//       </div> */}
//   <div className="px-6 pt-4 pb-2">
//     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
//     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
//     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
//   </div>
// </div>
//     </div>
//   )
// }

import React, { useState ,useEffect} from 'react'
import img from '../assets/images/Signup.png'
import axios from 'axios'
export default function ProductCard({product}) {
console.log(product);

  return (
    <div>
    
      <div className="max-w-sm rounded overflow-hidden shadow-l py-4 px-5 ">
        <div className='h-[350px]'>
  <img className="w-full h-full m-2  overflow-hidden" src={product.image} alt="Sunset in the mountains" /></div>
  <div className="px-6 py-4">
    {product.productname}<br/>
    <h1 className='text-gray-400'>
    {product.description}</h1>
    <h1 className='text-1xl'>
      Price: {product.price}₹
    </h1>
      </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{product.category}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{product.gender}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{product.productname}</span>
  </div>
</div>
    </div>
  )
}
