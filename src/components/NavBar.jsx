import React, { useState } from 'react'
import links from '../data/NavLinks'
import { Link } from 'react-router-dom'
import logo from '../assets/logo2.jpg'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion'  

function NavBar() {
    const [open, setIsOpen] = useState(false);  

    return (
        <nav className='flex justify-between px-2 shadow-lg top-0 items-center fixed w-full bg-white z-50'>
            {/* Logo */}
            <div className='w-[80px]'>
                <img className='w-full' src={logo} alt="Logo" />
            </div>

            {/* Links for Large Screens */}
            <div className='md:flex hidden gap-8'>
                {links.map((link, index) => (
                    link.path.includes("#") ? 
                        <a className='hover:text-yellow-400 transition-all duration-300' key={index} href={link.path}>{link.name}</a> :
                        <Link className='hover:text-yellow-400 transition-all duration-300' key={index} to={link.path}>{link.name}</Link>
                ))}
            </div>

            {/* Menu Icon for Small Screens */}
            <div className='md:hidden'>
                {open ? 
                    <AiOutlineClose className='text-2xl cursor-pointer' onClick={() => setIsOpen(false)} /> : 
                    <FaBars className='text-2xl cursor-pointer' onClick={() => setIsOpen(true)} />
                }
            </div>

            {/* Mobile Links (Animated) */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: open ? 1 : 0, y: open ? 0 : -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`md:hidden flex flex-col gap-5 px-2 py-4 bg-gray-300 w-full absolute left-0 top-[81px] ${
                    open ? "block" : "hidden"
                }`}
            >
                {links.map((link, index) => (
                    link.path.includes("#") ? 
                        <a onClick={() => setIsOpen(false)} className='hover:text-yellow-800 transition-all duration-300' key={index} href={link.path}>{link.name}</a> :
                        <Link onClick={() => setIsOpen(false)} className='hover:text-yellow-800 transition-all duration-300' key={index} to={link.path}>{link.name}</Link>
                ))}
            </motion.div>
        </nav>
    );
}

export default NavBar;
