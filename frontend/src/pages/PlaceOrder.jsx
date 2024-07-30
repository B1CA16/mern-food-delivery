import React, { useContext, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext)
  const [data, setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setData(data=>({...data, [name]: value}))
  }

  const placeOrder = async (event) => {
    event.preventDefault()

    let orderItems = []
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item
        itemInfo["quantity"] = cartItems[item._id]
        orderItems.push(itemInfo)
      }
    })

    let orderData = {
      items: orderItems,
      amount: getTotalCartAmount() + 2,
      address: data
    }

    let response = await axios.post(url+"/api/order/place", orderData, {headers: {token}})
    if (response.data.success) {
      const {session_url} = response.data
      window.location.replace(session_url)
    } else {
      alert("Error placing order: " + (response.data.message || "Unknown error"));
    }
  }

  return (
    <form onSubmit={placeOrder} className='flex md:flex-row flex-col items-center md:items-start justify-between gap-12 mt-24'>
      <div style={{ maxWidth: 'max(30%, 500px)' }} className='w-full'>
        <h2 className='text-2xl font-bold dark:text-neutral-200 mb-10'>Delivery Information</h2>
        <div className='flex gap-2'>
          <input required onChange={onChangeHandler} name='firstName' value={data.firstName} className='outline-none mb-3 w-full dark:bg-neutral-900 p-3 rounded-lg dark:text-neutral-200 border border-neutral-700' type="text" placeholder='First Name' />
          <input required onChange={onChangeHandler} name='lastName' value={data.lastName} className='outline-none mb-3 w-full dark:bg-neutral-900 p-3 rounded-lg dark:text-neutral-200 border border-neutral-700' type="text" placeholder='Last Name' />
        </div>
        <input required onChange={onChangeHandler} name='email' value={data.email} className='outline-none mb-3 w-full dark:bg-neutral-900 p-3 rounded-lg dark:text-neutral-200 border border-neutral-700' type="email" placeholder='Email' />
        <input required onChange={onChangeHandler} name='street' value={data.street} className='outline-none mb-3 w-full dark:bg-neutral-900 p-3 rounded-lg dark:text-neutral-200 border border-neutral-700' type="text" placeholder='Street' />
        <div className='flex gap-2'>
          <input required onChange={onChangeHandler} name='city' value={data.city} className='outline-none mb-3 w-full dark:bg-neutral-900 p-3 rounded-lg dark:text-neutral-200 border border-neutral-700' type="text" placeholder='City' />
          <input required onChange={onChangeHandler} name='state' value={data.state} className='outline-none mb-3 w-full dark:bg-neutral-900 p-3 rounded-lg dark:text-neutral-200 border border-neutral-700' type="text" placeholder='State' />
        </div>
        <div className='flex gap-2'>
          <input required onChange={onChangeHandler} name='zipcode' value={data.zipcode} className='outline-none mb-3 w-full dark:bg-neutral-900 p-3 rounded-lg dark:text-neutral-200 border border-neutral-700' type="text" placeholder='Zip code' />
          <input required onChange={onChangeHandler} name='country' value={data.country} className='outline-none mb-3 w-full dark:bg-neutral-900 p-3 rounded-lg dark:text-neutral-200 border border-neutral-700' type="text" placeholder='Country' />
        </div>
        <input required onChange={onChangeHandler} name='phone' value={data.phone} className='outline-none mb-3 w-full dark:bg-neutral-900 p-3 rounded-lg dark:text-neutral-200 border border-neutral-700' type="text" placeholder='Phone' />
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
              <p>{getTotalCartAmount() === 0 ? 0 : 2}$</p>
            </div>
            <hr className='w-full h-[2px] my-2 bg-neutral-200 dark:bg-neutral-800 border-none' />
            <div className='flex justify-between dark:text-neutral-200'>
              <b>Total</b>
              <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}$</b>
            </div>
          </div>
          <button type='submit' style={{ width: 'max(15vw, 200px)'}} className='bg-orange-500 text-neutral-200 py-3 rounded-xl transition-colors mt-7 hover:bg-orange-600'>Proceed To Payment</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
