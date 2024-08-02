import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col items-center gap-5 py-5 px-[8vw] pt-20 dark:text-neutral-200' id='footer'>
      <div style={{ gridTemplateColumns: '2fr 1fr 1fr' }} className='w-full flex flex-col md:grid gap-10 md:gap-20'>
        <div className='flex flex-col items-start gap-5'>
          <p className='text-orange-500 font-extrabold text-2xl md:text-3xl'>spiceRoute.</p>
          <p className='text-sm md:text-md'>At SpiceRoute, we are passionate about bringing the flavors of the world to your doorstep. Our dedication to culinary excellence and exceptional service ensures a delightful dining experience, whether you’re dining in with us or enjoying our dishes at home. We pride ourselves on using the freshest ingredients and crafting each dish with care and creativity.</p>
        </div>
        <div className='flex flex-col items-start gap-5'>
          <h2 className='text-xl md:text-2xl font-bold'>COMPANY</h2>
          <ul>
            <li className='text-sm md:text-md mb-2 cursor-pointer hover:text-neutral-800 hover:dark:text-neutral-400'>Home</li>
            <li className='text-sm md:text-md mb-2 cursor-pointer hover:text-neutral-800 hover:dark:text-neutral-400'>About Us</li>
            <li className='text-sm md:text-md mb-2 cursor-pointer hover:text-neutral-800 hover:dark:text-neutral-400'>Delivery</li>
            <li className='text-sm md:text-md mb-2 cursor-pointer hover:text-neutral-800 hover:dark:text-neutral-400'>Privacy Policy</li>
          </ul>
        </div>
        <div className='flex flex-col items-start gap-5'>
          <h2 className='text-xl md:text-2xl font-bold'>GET IN TOUCH</h2>
          <ul>
            <li className='text-sm md:text-md mb-2'>+1-123-456-789</li>
            <li className='text-sm md:text-md mb-2'>contact@spiceroute.com</li>
          </ul>
        </div>
      </div>
      <hr className='w-full my-4 h-1 bg-neutral-200 dark:bg-neutral-800 border-none' />
      <p>Copyright 2024 &#169; spiceroute.com - All Rigth Reserved.</p>
    </div>
  )
}

export default Footer
