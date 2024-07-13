import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext)

  return (
    <form className='flex md:flex-row flex-col items-center md:items-start justify-between gap-12 mt-24'>
      <div style={{ maxWidth: 'max(30%, 500px)' }} className='w-full'>
        <h2 className='text-2xl font-bold dark:text-neutral-200 mb-10'>Delivery Information</h2>
        <div className='flex gap-2'>
          <input className='outline-none mb-3 w-full dark:bg-neutral-900 p-3 rounded-lg dark:text-neutral-200 border border-neutral-700' type="text" placeholder='First Name' />
          <input className='outline-none mb-3 w-full dark:bg-neutral-900 p-3 rounded-lg dark:text-neutral-200 border border-neutral-700' type="text" placeholder='Last Name' />
        </div>
        <input className='outline-none mb-3 w-full dark:bg-neutral-900 p-3 rounded-lg dark:text-neutral-200 border border-neutral-700' type="email" placeholder='Email' />
        <input className='outline-none mb-3 w-full dark:bg-neutral-900 p-3 rounded-lg dark:text-neutral-200 border border-neutral-700' type="text" placeholder='Street' />
        <div className='flex gap-2'>
          <input className='outline-none mb-3 w-full dark:bg-neutral-900 p-3 rounded-lg dark:text-neutral-200 border border-neutral-700' type="text" placeholder='City' />
          <input className='outline-none mb-3 w-full dark:bg-neutral-900 p-3 rounded-lg dark:text-neutral-200 border border-neutral-700' type="text" placeholder='State' />
        </div>
        <div className='flex gap-2'>
          <input className='outline-none mb-3 w-full dark:bg-neutral-900 p-3 rounded-lg dark:text-neutral-200 border border-neutral-700' type="text" placeholder='Zip code' />
          <input className='outline-none mb-3 w-full dark:bg-neutral-900 p-3 rounded-lg dark:text-neutral-200 border border-neutral-700' type="text" placeholder='Country' />
        </div>
        <input className='outline-none mb-3 w-full dark:bg-neutral-900 p-3 rounded-lg dark:text-neutral-200 border border-neutral-700' type="text" placeholder='Phone' />
      </div>
      <div style={{ maxWidth: 'max(40%, 500px)' }} className='w-full'>
        <div className='flex-1 flex flex-col gap-5'>
          <h2 className='text-2xl font-bold dark:text-neutral-200'>Cart Totals</h2>
          <div>
            <div className='flex justify-between dark:text-neutral-200'>
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}$</p>
            </div>
            <hr className='w-full h-[2px] my-2 bg-neutral-200 dark:bg-neutral-800 border-none' />
            <div className='flex justify-between dark:text-neutral-200'>
              <p>Delivery Fee</p>
              <p>{2}$</p>
            </div>
            <hr className='w-full h-[2px] my-2 bg-neutral-200 dark:bg-neutral-800 border-none' />
            <div className='flex justify-between dark:text-neutral-200'>
              <b>Total</b>
              <b>{getTotalCartAmount() + 2}$</b>
            </div>
          </div>
          <button style={{ width: 'max(15vw, 200px)'}} className='bg-orange-500 text-neutral-200 py-3 rounded-xl transition-colors mt-7 hover:bg-orange-600'>Proceed To Payment</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
