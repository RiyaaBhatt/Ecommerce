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

import React from 'react'
import img from '../assets/images/Signup.png'

export default function ProductCard() {
  return (
    <div>
    
      <div className="max-w-sm rounded overflow-hidden shadow-l py-4 px-5">
  <img className="w-full h-full m-2" src={img} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    check out
      </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
    </div>
  )
}
