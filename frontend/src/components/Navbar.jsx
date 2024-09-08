import React, { useContext, useState, useEffect } from 'react';
import { FaMagnifyingGlass, FaCartShopping, FaBagShopping, FaRightFromBracket, FaUser } from 'react-icons/fa6';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const { getTotalCartAmount, token, setToken, setSearchQuery, menu, setMenu } = useContext(StoreContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem('token');
    setToken("");
    navigate('/');
  }

  const handleMenuClick = () => {
    setMenu("menu");
    navigate("/#explore-menu");
  }

  const handleFooterClick = () => {
    setMenu("contact-us");
    navigate("/#footer");
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(query);
    setSearchOpen(false);
    setMenu("menu");
    navigate("/#explore-menu");
  }

  useEffect(() => {
    if (location.hash === "#explore-menu") {
      const menuSection = document.getElementById("explore-menu");
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownOpen && !event.target.closest('.dropdown-menu')) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div className='flex py-4 justify-between items-center'>
      <Link to='/'><p className='text-orange-500 font-extrabold text-xl md:text-3xl xl:text-4xl'>spiceRoute.</p></Link>
      <ul className='sm:flex gap-4 md:gap-6 text-sm hidden md:text-lg xl:text-xl'>
        <Link to='/' onClick={() => setMenu("home")} className={`cursor-pointer dark:text-neutral-200 hover:text-neutral-700 dark:hover:text-neutral-300 hover:border-b-2 hover:border-neutral-700 dark:hover:border-neutral-300 ${menu==="home" ? "pb-1 border-b-2 font-bold border-black dark:border-neutral-200" : "border-neutral-400"} hover:border-neutral-700 dark:hover:border-neutral-300`}>Home</Link>
        <a href='#explore-menu' onClick={handleMenuClick} className={`cursor-pointer dark:text-neutral-200 hover:text-neutral-700 dark:hover:text-neutral-300 hover:border-b-2 hover:border-neutral-700 dark:hover:border-neutral-300 ${menu==="menu" ? "pb-1 border-b-2 font-bold border-black dark:border-neutral-200" : "border-neutral-400"} hover:border-neutral-700 dark:hover:border-neutral-300`}>Menu</a>
        <a href='#footer' onClick={handleFooterClick} className={`cursor-pointer dark:text-neutral-200 hover:text-neutral-700 dark:hover:text-neutral-300 hover:border-b-2 hover:border-neutral-700 dark:hover:border-neutral-300 ${menu==="contact-us" ? "pb-1 font-bold border-b-2 border-black dark:border-neutral-200" : "border-neutral-400"} hover:border-neutral-700 dark:hover:border-neutral-300`}>Contact Us</a>
      </ul>
      <div className='flex items-center gap-5 md:gap-8'>
        <div className='relative'>
          <FaMagnifyingGlass onClick={() => setSearchOpen(!searchOpen)} className='dark:text-neutral-200 text-lg xl:text-3xl hidden md:block md:text-2xl dark:hover:text-neutral-300 hover:text-neutral-700 hover:cursor-pointer' />
          {searchOpen && (
            <form onSubmit={handleSearch} className='absolute top-9 right-0 rounded-md'>
              <input 
                type='text' 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className='p-1 pl-2 border-2 dark:text-neutral-200 border-neutral-100 dark:border-neutral-800 placeholder-neutral-500 dark:bg-neutral-900 rounded-md focus:outline-none dark:focus:border-neutral-700 focus:border-neutral-200'
                placeholder='Search food...' 
              />
            </form>
          )}
        </div>
        <div className='relative'>
          <Link to='/cart'><FaCartShopping className='dark:text-neutral-200 text-lg md:text-2xl xl:text-3xl dark:hover:text-neutral-300 hover:text-neutral-700 hover:cursor-pointer' /></Link>
          {getTotalCartAmount() > 0 && <div className='absolute min-w-4 xl:min-w-5 min-h-4 xl:min-h-5  bg-orange-500 rounded-full -top-2 -right-2 border-2 xl:border-4 border-white dark:border-neutral-900'></div>}
        </div>
        {!token ? <button onClick={() => setShowLogin(true)} className='px-4 py-2 text-sm md:text-lg xl:text-xl bg-orange-500 rounded-xl text-white transition-colors hover:bg-orange-600'>Sign In</button>
        : <div className='relative dropdown-menu'>
            <FaUser className='dark:text-neutral-200 text-lg md:text-2xl xl:text-3xl dark:hover:text-neutral-300 hover:text-neutral-700 hover:cursor-pointer' onClick={() => setDropdownOpen(!dropdownOpen)} />
            {dropdownOpen && (
              <ul className='dark:text-neutral-200 absolute bg-white dark:bg-neutral-800 shadow-md rounded-md right-0 mt-2 py-2 w-48 z-10'>
                <li onClick={() => navigate('/myorders')} className='flex items-center px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer'>
                  <FaBagShopping className='text-orange-500 text-lg md:text-2xl' />
                  <span className='ml-3 font-medium'>Orders</span>
                </li>
                <hr className='my-1 dark:border-neutral-600' />
                <li onClick={logout} className='flex items-center px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer'>
                  <FaRightFromBracket className='text-orange-500 text-lg md:text-2xl' />
                  <span className='ml-3 font-medium'>Log Out</span>
                </li>
              </ul>
            )}
          </div> }
      </div>
    </div>
  );
}

export default Navbar;
