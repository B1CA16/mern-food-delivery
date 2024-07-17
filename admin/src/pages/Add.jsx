import React from 'react'
import { FaCloudArrowUp } from 'react-icons/fa6'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useDarkMode from '../hooks/useDarkMode'

const Add = ({url}) => {
  const isDarkMode = useDarkMode();
  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    name: '',
    description: '',
    category: 'Salad',
    price: '',
  })

  const onchangeHandler = (event) => {  
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data, [name]: value}))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    const formData = new FormData()
    
    formData.append('name', data.name)
    formData.append('description', data.description)
    formData.append('category', data.category)
    formData.append('price', Number( data.price))
    formData.append('image', image)

    const response = await axios.post(`${url}/api/food/add`, formData)

    if(response.data.success){
      setData({
        name: '',
        description: '',
        category: 'Salad',
        price: '',
      })
      setImage(false)
      toast.success('Product Added Successfully', {
        className: isDarkMode ? 'toast-dark' : 'toast-light'
      });
    } else {
      toast.error('Failed to add product', {
        className: isDarkMode ? 'toast-dark' : 'toast-light'
      });
    }
  }

  return (
    <div style={{ marginLeft: 'max(5vw,25px)'}} className='dark:text-neutral-200 w-7/10 mt-12 text-lg'>
      <form onSubmit={onSubmitHandler} className='flex flex-col gap-5'>
        <div className='flex flex-col gap-2 '>
          <p>Upload Image</p>
          <label htmlFor="image">
            {image ? 
              <img className='w-80 rounded-lg' src={URL.createObjectURL(image)} alt="" />
              :<div className='bg-neutral-200 dark:bg-neutral-800 flex flex-col px-10 py-5 rounded-xl items-center justify-center hover:cursor-pointer hover:text-neutral-900 hover:bg-neutral-200/70 hover:dark:bg-neutral-800/90 dark:hover:text-neutral-300'>
              <FaCloudArrowUp className='text-5xl' />
              <p>Upload Image</p>
            </div>}
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
        </div> 
        <div className='flex flex-col gap-2'>
          <p>Product Name</p>
          <input onChange={onchangeHandler} value={data.name} className='outline-none w-80 dark:bg-neutral-900 p-3 rounded-lg dark:text-neutral-200 border border-neutral-700' type="text" name='name' placeholder='Type here' />
        </div>
        <div className='flex flex-col gap-2'>
          <p>Product Description</p>
          <textarea onChange={onchangeHandler} value={data.description} className='outline-none w-80 dark:bg-neutral-900 p-3 rounded-lg dark:text-neutral-200 border border-neutral-700'  name='description' rows="6" placeholder='Type here' required/>
        </div>
        <div className='flex gap-8'>
          <div>
            <p>Product Category</p>
            <select onChange={onchangeHandler} value={data.category} className='outline-none max-w-36 dark:bg-neutral-900 p-3 rounded-lg dark:text-neutral-200 border border-neutral-700' name="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Desert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div>
            <p>Product Price</p>
            <input onChange={onchangeHandler} value={data.price} className='outline-none max-w-36 dark:bg-neutral-900 p-3 rounded-lg dark:text-neutral-200 border border-neutral-700' type="number" name='price' placeholder='20$' required />
          </div>
        </div>
        <button className='py-3 rounded-lg font-bold bg-orange-500 hover:bg-orange-600 text-neutral-200' type='submit'>Add</button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default Add
