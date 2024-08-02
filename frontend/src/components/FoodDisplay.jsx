import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import FoodItem from './FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list, searchQuery } = useContext(StoreContext);

  const filteredFoodList = food_list.filter((item) => {
    return (
      (category === "All" || category === item.category) &&
      (searchQuery === '' || item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <div className='mt-8'>
      <h1 className='text-2xl md:text-3xl font-bold dark:text-neutral-200'>Find our best dishes</h1>
      <div style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }} className='grid mt-8 gap-8 gap-y-12'>
        {filteredFoodList.length > 0 ? (
          filteredFoodList.map((item, index) => (
            <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
          ))
        ) : (
          <p className='text-lg dark:text-neutral-200'>No dishes found. Please try a different search.</p>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
