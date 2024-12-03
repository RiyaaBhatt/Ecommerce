import React from 'react'
import AdminSidebar from '../pages/AdminSidebar'
import AddProduct from '../components/AddProduct'
import ProductFetch from '../components/ProductFetch'
export default function Products() {
  return (
    <>    <AdminSidebar/>
    <div className='flex'>
  
      <div className="ml-[250px] p-[20px] flex-1">
  
        <ProductFetch/>
     
   

  </div>
    </div></>
  )
}
