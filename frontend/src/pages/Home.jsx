import React from 'react'
import img from '../assets/images/Home.png'
import Navbar2 from '../components/Navbar'
import Hero from '../components/Hero'
import CategoryCard from '../components/CategoryCard'
import ProductCard from '../components/PrductCard'
import Casual from '../assets/images/Casual.png'
import Ethnic from '../assets/images/ethnic.png'
import kids from '../assets/images/kids.png'
import women from '../assets/images/women.png'
import DealOfTheMonth from '../components/DealOfTheMonth'
import Footer from '../components/Footer'
import Reviews from '../components/Reviews'
import { useNavigate, useLocation } from 'react-router-dom'
export default function Home() {
  const location = useLocation();
  const username = location.state?.username;
  const navigate=useNavigate()
  

function getCookie(){
// console.log(document.cookie);

}

getCookie()

  return (
  
    <div>
<div>
 
  <Navbar2/>
  <Hero/>
  <br />
  <p className='text-2xl  px-6 font-bold font-normal'> Shop By Categories</p>
  
  <div className='flex flex-row px-10 mx-14'>

   
  <CategoryCard img={Casual} btntext="Casual Wear"/>
<CategoryCard img={women} btntext="Women Wear"/>
<CategoryCard img={Ethnic} btntext="Ethnic Wear"/>
<CategoryCard img={kids} btntext="Kids Wear"/>
  </div>
  <div>
    <center><h1 className='text-4xl justify-center font-normal'>Our BestSeller</h1></center>
  </div>
  <div className='flex flex-wrap relative  left-[130px] px-4 mx-10'>
    {
      new Array(6).fill(6).map(()=> (

        <ProductCard className="w-1/4" />
      ))
    }
    
</div>
<DealOfTheMonth/>

      </div>
      <div className='relative bottom-[200px]'>
      
      </div>
<Reviews/>
 <Footer/>


    </div>
  )
}
