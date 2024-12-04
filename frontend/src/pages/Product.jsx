// import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import { useSelector } from 'react-redux'

// export default function Product() {
//   const product=useSelector((state)=>state.AllUser.Product)
//   console.log(product);
  
//   return (
//     <div>
//       <div className='sticky '>
//       <Navbar/>
//       </div>
//       <div className='flex flex-wrap gap-1'>

//     {

//       product.map((product,id)=>(
//         <div key={id}>
//               <div className="max-w-sm rounded overflow-hidden shadow-l py-4 px-5 ">
//       <div className='h-[350px]'>
// <img className="w-full h-full m-2  overflow-hidden" src={product.image} alt="Sunset in the mountains" /></div>
// <div className="px-6 py-4">
//   {product.productname}<br/>
//   <h1 className='text-gray-400'>
//   {product.description}</h1>
//   <h1 className='text-1xl'>
//     Price: {product.price}₹
//   </h1>
//     </div>
// <div className="px-6 pt-4 pb-2">
//   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{product.category}</span>
//   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{product.gender}</span>
//   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{product.productname}</span>
// </div>
// </div>
//         </div>
//       ))}

//   </div>

     
//   <Footer/>
//     </div>
//   )
// }

import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaCartPlus, FaTrashAlt } from 'react-icons/fa';

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { useSelector } from 'react-redux'
import { useAlert } from 'react-alert';
import axios from 'axios';
const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
]
const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: true },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: true },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Product() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [cartItems, setCartItems] = useState([]);
  const [show, setShow] = useState(false);
  const alert=useAlert()
  const userId=useSelector((state)=>state)


  const product=useSelector((state)=>state.AllUser.Product)
  const addToCart = (product) => {
    setCartItems((prevItems) => {
        const itemExists = prevItems.find((item) => item.productId === product.productId);
        if (itemExists) {
            console.log(prevItems);
            console.log(product);
            
            return prevItems.map((item) =>(
              
              
              
                item.productId === product.productId ? { ...item, quantity: item.quantity + 1 } : item
         
              ));
        } else {
            return [...prevItems, { ...product, quantity: 1 }];
        }
    });
    console.log("hi i am cart item",cartItems);
    
};
const removeFromCart = (id) => {
  console.log(id);
  
  setCartItems((prevItems) => prevItems.filter((item) => 
  item.productId !== id));
};

// Update product quantity in the cart
const updateQuantity = (id, newQuantity) => {
  console.log("hello i am update quantity ",id);
  
  setCartItems((prevItems) =>
      prevItems.map((item) =>
          item.productId === id ? { ...item, quantity: newQuantity > 0 ? 
          newQuantity : 1 } : item
      )
  );
  console.log(cartItems)
};
const total = cartItems.reduce((acc, item) => acc + item.price * 
    item.quantity, 0);

  // console.log(product);
  function orderPlace(cartItems){

    try{
      const response=axios.post("http://localhost:1234/addproduct/",[cartItems])
      alert.show("Order placed successfully")
    }
    catch(err)
    {
      console.log(err);
      
      alert.show("failure for order place")

    }
  }
  return (
    <div className="bg-white">
       <Navbar/>
       
      <div>
        {/* Mobile filter dialog */}
        <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href} className="block px-2 py-3">
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                          <MinusIcon aria-hidden="true" className="size-5 group-[&:not([data-open])]:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  defaultValue={option.value}
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:checked]:opacity-100"
                                  />
                                  <path
                                    d="M3 7H11"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                  <button onClick={() => setShow(!show)} className=" px-3 rounded bg-indigo-600 hover:bg-indigo-700 text-white">
                  Open Cart                    </button>
                </div>


                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <a
                          href={option.href}
                          className={classNames(
                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                            'block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:outline-none',
                          )}
                        >
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                          <MinusIcon aria-hidden="true" className="size-5 group-[&:not([data-open])]:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  defaultValue={option.value}
                                  defaultChecked={option.checked}
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:checked]:opacity-100"
                                  />
                                  <path
                                    d="M3 7H11"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <label htmlFor={`filter-${section.id}-${optionIdx}`} className="text-sm text-gray-600">
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>

              <div className="lg:col-span-3 flex flex-wrap relative  left-[130px] px-4 mx-10">     {

      product.map((product,id)=>(
        <div key={id}>
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
<div>
  
<button
    onClick={() => addToCart(product)}
    className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-colors"
>
    <FaCartPlus /> Add to Cart
</button>  </div>
</div>
        </div>
      ))}</div>
            </div>
          </section>
        </main>
      </div>
  
                {show && (
                    <div className="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
                        <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                            <div className="flex md:flex-row flex-col justify-end" id="cart">
                                <div className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">
                                    <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer" onClick={() => setShow(!show)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <polyline points="15 6 9 12 15 18" />
                                        </svg>
                                        <p className="text-sm pl-2 leading-none">Back</p>
                                    </div>
                                    <p className="text-5xl font-black leading-10 text-gray-800 pt-3">Bag</p>
                                    {cartItems.map((item) => (
                                        <div key={item.productId} className="md:flex items-center py-8 border-t border-gray-200">
                                            {console.log("hi i am cart")}
                                            <div className="w-1/4">
                                          
                                            
                                                <img src={item.image} alt className="w-full h-full object-center object-cover" />
                                            </div>
                                            <div className="md:pl-3 md:w-3/4">
                                                <div className="flex items-center justify-between w-full pt-1">
                                                    <p className="text-base font-black leading-none text-gray-800">{item.productname}</p>
                                                    <p className="text-base font-black leading-none text-gray-800">Quantity:{item.quantity}</p>
{/* 
                                                    <input className="py-2 px-1 border border-gray-200 mr-2 focus:outline-none"  placeholder='update quantity' />
                                                    <input type="button" value="Update Quantity" className='btn border-t-neutral-800 bg-gray-500 rounded-lg' onClick={updateQuantity(item.productId,item)} />
                                                        
                                                    */}
                                                </div>
                                        
                                                <div className="flex items-center justify-between pt-5 pr-6">
                                                    <div className="flex itemms-center">
                                                        <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>
                                                        <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer" onClick={() => removeFromCart(item.productId)}>Remove</p>
                                                    </div>
                                                    <p className="text-base font-black leading-none text-gray-800">${item.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
                                    <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                                        <div>
                                            <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
                                            <div className="flex items-center justify-between pt-16">
                                                <p className="text-base leading-none text-gray-800">Subtotal</p>
                                                <p className="text-base leading-none text-gray-800">${cartItems.reduce((acc, item) =>parseInt(acc) + parseInt(item.price* item.quantity), 0)}</p>
                                            </div>
                                            <div className="flex items-center justify-between pt-5">
                                                <p className="text-base leading-none text-gray-800">Shipping</p>
                                                <p className="text-base leading-none text-gray-800">$30</p>
                                            </div>
                                            <div className="flex items-center justify-between pt-5">
                                                <p className="text-base leading-none text-gray-800">Tax</p>
                                                <p className="text-base leading-none text-gray-800">$35</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                                <p className="text-2xl leading-normal text-gray-800">Total</p>
                                                <p className="text-2xl font-bold leading-normal text-right text-gray-800">${cartItems.reduce((acc, item) =>parseInt(acc) + parseInt(item.price* item.quantity), 0) + 65}</p>
                                            </div>
                                            <button onClick={() => {
orderPlace(cartItems)
                                            }} className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                                Checkout
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

      <Footer/>
    </div>
  )
}