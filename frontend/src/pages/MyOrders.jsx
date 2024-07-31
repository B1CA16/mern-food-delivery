import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'
import { FaBox } from 'react-icons/fa6'

const MyOrders = () => {
  const [data, setData] = useState([])
  const {url, token} = useContext(StoreContext)  

  const fetchOrders = async () => {
    const response =  await axios.post(url+"/api/order/myorders", {}, {headers: {token}})
    setData(response.data.data)
  }

  useEffect (() => {
    if (token) {
      fetchOrders()
    }
  }, [])

  return (
    <div className='dark:text-neutral-200 my-12'>
      <h2 className='text-2xl font-semibold'>My Orders</h2>
      <div className='flex flex-col gap-5 mt-7'>
        {data.map((order, index) => {
          return (
            <div key={index} style={{ gridTemplateColumns: '0.5fr 2fr 1fr 1fr 2fr 2fr'}} className='flex flex-col md:grid items-center gap-3 py-3 px-5 border-b-2 dark:border-neutral-800 border-neutral-200'>
              <FaBox className='text-3xl text-orange-500' />
              <p>{order.items.map((item, index) => {
                if (index === order.items.length - 1) {
                  return item.name + " X " + item.quantity
                } else {
                  return item.name + " X " + item.quantity + ", "
                }
              })}</p>
              <p>{order.amount}.00$</p>
              <p>Items: {order.items.length}</p>
              <p className='font-medium'><span className='text-orange-500'>&#x25cf;</span> {order.status}</p>
              <button onClick={fetchOrders} className='py-2 px-1 font-medium rounded-lg bg-orange-500 hover:bg-orange-600 text-neutral-200'>Track Order</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyOrders
