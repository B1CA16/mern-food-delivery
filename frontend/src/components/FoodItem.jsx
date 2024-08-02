import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'

const FoodItem = ({id, name, description, price, image}) => {
  const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext);

  return (
    <div className='w-full m-auto rounded-2xl shadow-md dark:shadow-neutral-950 animate-fade'>
      <div className='relative'>
        <img style={{ borderRadius: '15px 15px 0px 0px'}} className='w-full' src={url+"/images/"+image} alt={name} />
        {!cartItems[id]
          ? <img className='w-9 absolute bottom-4 right-4 rounded-full cursor-pointer hover:opacity-85' onClick={() => addToCart(id)} src={assets.add_icon_white} alt='add' /> 
          : <div className='absolute bottom-4 right-4 flex items-center gap-2 p-1 rounded-full bg-white'>
              <img className='w-7 cursor-pointer hover:opacity-85' onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt='remove' /> 
              <p>{cartItems[id]}</p>
              <img className='w-7 cursor-pointer hover:opacity-85' onClick={() => addToCart(id)} src={assets.add_icon_green} alt="add" />
            </div>
        }
      </div>
      <div className='p-5'>
        <div className='flex justify-between items-center mb-2'>
          <p className='text-xl font-semibold dark:text-neutral-200'>{name}</p>
          <img className='w-18' src={assets.rating_stars} alt="star" />
        </div>
        <p className='dark:text-neutral-200'>{description}</p>
        <p className='text-orange-500 text-xl font-bold my-2'>{price}$</p>
      </div>
    </div>
  )
}

export default FoodItem