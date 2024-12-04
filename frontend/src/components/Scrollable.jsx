import React from 'react'

export default function Scrollable({title,data}) {
    console.log(data);
    
  return (
    <div className='w-[400px] w-20 mt-[100px]  bg-gray-100 scrollbar-thin scrollbar-thumb-rounded-full absolute bottom-[-90px] left-[395px] h-[300px] scrollbar h-32 overflow-y-scroll overflow-scroll scrollbar-thumb-gray-400 scrollbar-track-gray-200'>
            <h1 className='text-2xl '>
{title}
    </h1>
   <table>
    <tr>
        <th>Username</th>
        <th>Order</th>
    </tr>
  {data?.slice(0, 10).map((item, key) => (
    <tr key={key} className='border border-gray-400'>

      <td>{item.username}</td>
      <td>{item.orderCount}</td>
    </tr>
  ))}
</table>
      </div>
  )
}
