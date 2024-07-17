import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import useDarkMode from '../hooks/useDarkMode';

const List = ({url}) => {
  const isDarkMode = useDarkMode();
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error Loading List", {
        className: isDarkMode ? 'toast-dark' : 'toast-light'
      });
    }
  };

  const removeItem = async (id) => {
    const response = await axios.post(`${url}/api/food/remove`,{id: id});
    await fetchList();
    if (response.data.success) {
      toast.success("Item Deleted Successfully", {
        className: isDarkMode ? 'toast-dark' : 'toast-light'
      });
    } else {
      toast.error("Failed to delete item", {
        className: isDarkMode ? 'toast-dark' : 'toast-light'
      });
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='flex flex-col w-2/3 mx-4 sm:mx-8 mt-12 dark:text-neutral-200'>
      <p className='font-bold text-2xl mb-6'>Food List</p>
      <div>
        <div className='flex items-center gap-2 md:gap-4 py-3 px-2 md:px-4 border-b-2 border-neutral-300 dark:border-neutral-800 bg-neutral-300/30 dark:bg-neutral-800/30 rounded-tr-lg rounded-tl-lg'>
          <b className='w-1/6'>Image</b>
          <b className='w-1/3 truncate'>Name</b>
          <b className='w-1/6 truncate'>Category</b>
          <b className='w-1/6'>Price</b>
          <b className='w-1/6'>Action</b>
        </div>
        {list.map((item, index) => (
          <div key={index} className='flex flex-row items-center gap-2 md:gap-4 py-3 px-2 md:px-4 border-b-[1px] border-neutral-300 dark:border-neutral-800'>
            <img className='w-1/6 md:w-20 lg:w-28 rounded-lg' src={`${url}/images/${item.image}`} alt={item.name} />
            <p className='w-1/3 truncate'>{item.name}</p>
            <p className='w-1/6 truncate'>{item.category}</p>
            <p className='w-1/6'>{item.price}$</p>
            <button onClick={() => removeItem(item._id)} className='w-1/6 hover:text-neutral-700 dark:hover:text-neutral-300'>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
