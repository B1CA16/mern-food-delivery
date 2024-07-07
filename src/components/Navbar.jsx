import React, { useState } from 'react'
import { FaMagnifyingGlass, FaCartShopping } from 'react-icons/fa6'

const Navbar = () => {
  const [menu, setMenu] = useState("home")

  return (
    <div className='flex py-4 justify-between items-center'>
      <p className='text-orange-500 font-extrabold text-3xl'>spiceRoute.</p>
      <ul className='flex gap-6 text-lg'>
        <li onClick={() => setMenu("home")} className={`cursor-pointer dark:text-neutral-200 hover:text-neutral-700 dark:hover:text-neutral-300 hover:font-bold ${menu==="home" ? "pb-1 border-b-2 font-bold border-black dark:border-neutral-200" : "border-neutral-400"} hover:border-neutral-700 dark:hover:border-neutral-300`}>Home</li>
        <li onClick={() => setMenu("menu")} className={`cursor-pointer dark:text-neutral-200 hover:text-neutral-700 dark:hover:text-neutral-300 hover:font-bold ${menu==="menu" ? "pb-1 border-b-2 font-bold border-black dark:border-neutral-200" : "border-neutral-400"} hover:border-neutral-700 dark:hover:border-neutral-300`}>Menu</li>
        <li onClick={() => setMenu("contact-us")} className={`cursor-pointer dark:text-neutral-200 hover:text-neutral-700 dark:hover:text-neutral-300 hover:font-bold ${menu==="contact-us" ? "pb-1 font-bold border-b-2 border-black dark:border-neutral-200" : "border-neutral-400"} hover:border-neutral-700 dark:hover:border-neutral-300`}>Contact Us</li>
      </ul>
      <div className='flex items-center gap-10'>
        <FaMagnifyingGlass className='dark:text-neutral-200 text-2xl dark:hover:text-neutral-300 hover:text-neutral-700 hover:cursor-pointer' />
        <div className='relative'>
          <FaCartShopping className='dark:text-neutral-200 text-2xl dark:hover:text-neutral-300 hover:text-neutral-700 hover:cursor-pointer' />
          <div className='absolute min-w-4 min-h-4 bg-orange-500 rounded-full -top-2 -right-2 border-2 border-white dark:border-neutral-900'></div>
        </div>
        <button className='px-4 py-2 bg-orange-500 rounded-xl text-white transition-colors hover:bg-orange-600'>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
