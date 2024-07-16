import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='px-16 m-auto flex py-4 justify-between items-center shadow-md dark:shadow-neutral-950'>
      <Link to='/'>
        <p className='text-orange-500 font-extrabold text-xl md:text-3xl'>spiceRoute.</p>
        <p className='dark:text-neutral-200'>Admin Panel</p>
      </Link>
      <img className='w-12 md:w-14' src={assets.profile_image} alt="profile Image" />
    </div>
  )
}

export default Navbar
