import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({category}) => {
  const {food_list} = useContext(StoreContext)

  return (
    <div className='mt-8'>
      <h1 className='text-2xl md:text-3xl font-bold dark:text-neutral-200'>Top dishes near you</h1>
      <div style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }} className='grid mt-8 gap-8 gap-y-12'>
        {food_list.map((item, index) => {
          if(category === "All" || category === item.category) {
            return <FoodItem key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image} />
          }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
