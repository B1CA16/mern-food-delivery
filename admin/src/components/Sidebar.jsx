import React from 'react'
import { FaBox, FaCirclePlus, FaList } from 'react-icons/fa6'
import { NavLink, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation();

  const getLinkClasses = (path) => {
    return location.pathname === path 
      ? 'flex items-center gap-3 rounded-md p-2 pl-4 bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100' 
      : 'flex items-center gap-3 rounded-md p-2 pl-4 hover:cursor-pointer hover:bg-neutral-200 hover:dark:bg-neutral-800';
  };

  return (
    <div className='w-1/5 min-h-[100vh] shadow-md dark:shadow-neutral-950'>
      <div className='pt-12 px-[20%] flex flex-col gap-5 dark:text-neutral-200'>
        <NavLink to='/add' className={getLinkClasses('/add')}>
          <FaCirclePlus className='text-xl' />
          <p className='hidden lg:inline'>Add Items</p>
        </NavLink>
        <NavLink to='/list' className={getLinkClasses('/list')}>
          <FaList className='text-xl' />
          <p className='hidden lg:inline'>List Items</p>
        </NavLink>
        <NavLink to='/orders' className={getLinkClasses('/orders')}>
          <FaBox className='text-xl' />
          <p className='hidden lg:inline'>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
