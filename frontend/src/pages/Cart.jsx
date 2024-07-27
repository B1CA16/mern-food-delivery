import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router'

const Cart = () => {
  const {cartItems, food_list, removeFromCart, getTotalCartAmount, url} = useContext(StoreContext)
  const navigate = useNavigate()

  return (
    <div className='mt-12 md:mt-24'>
      <div>
        <div style={{ gridTemplateColumns: '1fr 1.5fr 1fr 1fr 1fr 0.5fr', fontSize: 'max(1.3vw,16px)' }} className='grid items-center dark:text-neutral-200 font-bold'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className='w-full h-1 bg-neutral-200 dark:bg-neutral-800 border-none' />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div style={{ gridTemplateColumns: '1fr 1.5fr 1fr 1fr 1fr 0.5fr', fontSize: 'max(1.3vw,14px)'}} className='grid items-center dark:text-neutral-200 my-2'>
                  <img className='w-12' src={url + "/images/" +item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>{item.price}$</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]}$</p>
                  <p onClick={() => removeFromCart(item._id)} className='cursor-pointer hover:text-neutral-800 dark:hover:text-neutral-200 font-bold text-lg'>x</p>
                </div>
                <hr className='w-full h-[2px] bg-neutral-200 dark:bg-neutral-800 border-none' />
              </div>
            )
          }
        })}
      </div>
      <div style={{ gap: 'max(8vw, 20px)'}} className='mt-8 md:mt-20 flex md:flex-row flex-col justify-between'>
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
          <button onClick={() => navigate('/order')} style={{ width: 'max(15vw, 200px)'}} className='bg-orange-500 text-neutral-200 py-3 rounded-xl transition-colors hover:bg-orange-600'>Proceed To Checkout</button>
        </div>
        <div>
          <div>
            <p className='text-lg dark:text-neutral-200'>If you have a promo code, Enter it here</p>
            <div className='mt-3 flex gap-3 items-center'>
              <input className='outline-none dark:bg-neutral-900 p-3 rounded-lg dark:text-neutral-200 border border-neutral-700' type="text" placeholder='Promocode' />
              <button className='bg-orange-500 text-neutral-200 px-6 py-3 rounded-xl transition-colors hover:bg-orange-600'>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
