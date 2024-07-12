import React, { useState } from 'react'
import { FaMagnifyingGlass, FaCartShopping } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home")

  return (
    <div className='flex py-4 justify-between items-center'>
      <p className='text-orange-500 font-extrabold text-xl md:text-3xl'>spiceRoute.</p>
      <ul className='sm:flex gap-4 md:gap-6 text-sm hidden md:text-lg'>
        <Link to='/' onClick={() => setMenu("home")} className={`cursor-pointer dark:text-neutral-200 hover:text-neutral-700 dark:hover:text-neutral-300 hover:font-bold ${menu==="home" ? "pb-1 border-b-2 font-bold border-black dark:border-neutral-200" : "border-neutral-400"} hover:border-neutral-700 dark:hover:border-neutral-300`}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={`cursor-pointer dark:text-neutral-200 hover:text-neutral-700 dark:hover:text-neutral-300 hover:font-bold ${menu==="menu" ? "pb-1 border-b-2 font-bold border-black dark:border-neutral-200" : "border-neutral-400"} hover:border-neutral-700 dark:hover:border-neutral-300`}>Menu</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={`cursor-pointer dark:text-neutral-200 hover:text-neutral-700 dark:hover:text-neutral-300 hover:font-bold ${menu==="contact-us" ? "pb-1 font-bold border-b-2 border-black dark:border-neutral-200" : "border-neutral-400"} hover:border-neutral-700 dark:hover:border-neutral-300`}>Contact Us</a>
      </ul>
      <div className='flex items-center gap-5 md:gap-8'>
        <FaMagnifyingGlass className='dark:text-neutral-200 text-lg md:text-2xl dark:hover:text-neutral-300 hover:text-neutral-700 hover:cursor-pointer' />
        <div className='relative'>
          <FaCartShopping className='dark:text-neutral-200 text-lg md:text-2xl dark:hover:text-neutral-300 hover:text-neutral-700 hover:cursor-pointer' />
          <div className='absolute min-w-4 min-h-4 bg-orange-500 rounded-full -top-2 -right-2 border-2 border-white dark:border-neutral-900'></div>
        </div>
        <button onClick={() => setShowLogin(true)} className='px-4 py-2 text-sm md:text-lg bg-orange-500 rounded-xl text-white transition-colors hover:bg-orange-600'>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
