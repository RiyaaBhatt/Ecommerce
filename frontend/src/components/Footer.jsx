import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white shadow shadow-2xl slate-100 ">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
       
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-bold text-gray-800">Glowkart</h1>
            <p className="text-gray-500 mt-2">
              Your one-stop solution for amazing products and services.
            </p>
          </div>

          <nav className="flex flex-wrap space-x-6 justify-center">
            <a href="/about" className="text-gray-600 hover:text-gray-800">
              About Us
            </a>
            <a href="/services" className="text-gray-600 hover:text-gray-800">
              Services
            </a>
            <a href="/products" className="text-gray-600 hover:text-gray-800">
              Products
            </a>
            <a href="/contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </a>
          </nav>
        </div>

        <div className="border-t border-gray-200 py-8">
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
            Stay Updated
          </h2>
          <form className="flex flex-col md:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
            >
              Subscribe
            </button>
          </form>
        </div>

       
        <div className="flex flex-col md:flex-row md:justify-between items-center mt-8">
        
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://facebook.com"
              className="text-gray-600 hover:text-blue-500"
            >
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-600 hover:text-blue-500"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-600 hover:text-pink-500"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>

        
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Glowkart. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
