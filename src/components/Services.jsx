import  { useEffect } from 'react'
import CardServices from './CardServices'
import services from '../data/ServicesData'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Services() {
    useEffect(() => {
          AOS.init({duration : 1000});
        }, [])
  return (
    <div id='services' className='flex flex-col items-center gap-5 mt-[80px]'>
        <h1 className='md:text-4xl text-2xl font-bold font-serif'><span className='text-yellow-700'>Our</span> Services</h1>
        <div data-aos="zoom-out-up" className='mx-9 flex flex-wrap justify-center items-center gap-6'>
            {services.map((service , index) => (
                <CardServices key={index} title = {service.title} description = {service.description} icon = {service.icon} />
            ))}
        </div>
    </div>
  )
}

export default Services