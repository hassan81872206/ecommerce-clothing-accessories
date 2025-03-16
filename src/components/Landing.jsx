import React, { useEffect } from 'react'
import landing from '../assets/landing.jfif'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Landing() {
  useEffect(() => {
    AOS.init({duration : 1000});
  }, [])
  return (
    <div className='flex justify-center items-center flex-wrap gap-5 mt-[120px]'>
      <div data-aos="fade-right" className='flex flex-col max-w-[500px] gap-3 px-3'>
        <h1 className='md:text-4xl text-2xl font-bold font-serif'>Discover Your Unique Style With Us</h1>
        <p className='font-light tracking-wide'>Step into a world of fashion that celebrates individuality. Our curated collection brings you the latest trends and timless and pieces crafted with care</p>
        <button className='border border-yellow-800 w-fit px-5 py-1 hover:bg-yellow-800 hover:text-white transition-all duration-300'>Learn More</button>
      </div>
      <div data-aos="fade-left" className='max-w-[400px] px-3'>
        <img src={landing} alt="" />
      </div>
    </div>
  )
}

export default Landing