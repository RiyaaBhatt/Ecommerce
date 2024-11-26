 import React from 'react';


export default function ProductCard({img,btntext}) {
  return (
    <div className="flex flex-wrap gap-6 p-6 z-30">
      {/* Card 1 */}
      <div className="w-64 h-96 rounded overflow-hidden shadow-lg bg-white">
        <img
          className="w-full h-full object-cover"
          src={img}
          alt="Product"
        />

      </div>
      <input type="button" value={btntext} className='z-40 btn bg-white font-bold' style={{
        position: 'relative',
        bottom:"92px",
        left:"20px",
        height:"50px",
        width:"180px",
        borderRadius:"10px"
      }} />
      </div>

  );
}
