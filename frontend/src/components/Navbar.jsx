import React, { useState } from "react";
import { Link } from "react-router-dom";
 import search from '../assets/images/search.svg'
 import wishlist from '../assets/images/wishlist.svg'
 import cart from '../assets/images/cart.svg'
 import Cookies from 'js-cookie';
 import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate=useNavigate()
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
    const handleLogout = () => {
    localStorage.removeItem("AccessToken");
    console.log("token removed");
    window.dispatchEvent(new Event("storage")); 
    navigate("/");
  };
 
  return (
    <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src="https://www.svgrepo.com/show/499962/music.svg"
            className="h-6 mr-3 sm:h-9"
            alt="Landwind Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          GlowCart
          </span>
        </Link>
 
        <div className="flex items-center lg:order-2">
          <div className="hidden mt-2 mr-4 sm:inline-block">
            <span></span>
          </div>
          <div className="flex  w-5 m-3 ">  
            {/* <img src={search} alt="" className="space-between	" /> */}
        {/* <img src={wishlist} alt="" className=" " /> */}
        <img src={cart} alt="" className="h-10"  /></div>
        
 
          
          <button onClick={handleLogout} className="text-white bg-black focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800">
            Logout</button>
     
      
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
 
        <div
          className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {[
              { name: "Home", to: "/", active: true },
              { name: "Company", to: "/" },
              { name: "Marketplace", to: "/" },
              { name: "Features", to: "/" },
              { name: "Team", to: "/" },
              { name: "Contact", to: "/" },
            ].map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  className={`block py-2 pl-3 pr-4 rounded lg:bg-transparent lg:p-0 ${
                    link.active
                      ? "text-white bg-purple-700 lg:text-purple-700"
                      : "text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-purple-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  }`}
                  aria-current={link.active ? "page" : undefined}
                >
                  {link.name}
                </Link>
              </li>
            ))}
           
          </ul>
        </div>
       
      </div>
    </nav>
  );
};
 
export default Navbar;
 