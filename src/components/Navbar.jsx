import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { WishlistContext } from '../context/WishlistContext';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import { BookContext } from '../context/BookContext';

const Navbar = () => {
  const { wishlistedBooks } = useContext(WishlistContext);
  const { resetFiltersAndPagination } = useContext(BookContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='fixed top-0 left-0 z-10 w-full bg-slate-800'>
      <div className='container flex items-center justify-between p-4 mx-auto'>
        <div className='text-lg font-semibold text-white'>
          <Link
            to='/'
            onClick={resetFiltersAndPagination}
            className='hover:text-gray-300'
          >
            Book Library
          </Link>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            type='button'
            className='text-white hover:text-gray-300 focus:outline-none'
          >
            {isOpen ? <FaTimes size={20} /> : <GiHamburgerMenu size={20} />}
          </button>
        </div>

        {/* Links for desktop */}
        <div className='hidden md:flex md:space-x-4'>
          <Link
            to='/'
            onClick={resetFiltersAndPagination}
            className='px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-500'
          >
            Home
          </Link>
          <Link
            to='/wishlist'
            className='relative px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-500'
          >
            Wishlist
            <span className='absolute px-[5px] py-[3px] text-sm text-white rounded-full -top-[10px] -right-[10px] bg-red-500'>
              {wishlistedBooks?.length}
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile menu with smooth animation */}
      <div
        className={`md:hidden bg-slate-800 overflow-hidden transition-all duration-300 ease-in-out transform ${
          isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='flex flex-col px-4 py-2 space-y-2'>
          <Link
            to='/'
            className='px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-500'
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to='/wishlist'
            className='relative px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-500'
            onClick={() => setIsOpen(false)}
          >
            Wishlist
            <span className='absolute px-[5px] py-[3px] text-sm text-white rounded-full -top-[10px] -right-[10px] bg-red-500'>
              {wishlistedBooks?.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
