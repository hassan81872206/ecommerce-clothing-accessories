import  { useEffect } from 'react'
import ComAbout from './ComAbout'
import about from '../assets/about.jpg'
import dataAbouts from '../data/AboutData'
import AOS from 'aos';
import 'aos/dist/aos.css';
function About() {
    useEffect(() => {
        AOS.init({duration : 1000});
      }, [])
  return (
    <div id='about' className='flex flex-col items-center gap-5 mt-[80px]'>
        <h1 className='md:text-4xl text-2xl font-bold font-serif'>About <span className='text-yellow-700'>Us</span></h1>
        <div className='mt-10 flex flex-wrap justify-center items-center gap-5 shadow-lg p-2'>
            <div data-aos="fade-up" className='max-w-[400px]'>
                <img src={about} alt="" />
            </div>
            <div data-aos="fade-down">
                {dataAbouts.map((about , index) => (
                    <ComAbout key={index} number = {about.number} title = {about.title} description = {about.description} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default About