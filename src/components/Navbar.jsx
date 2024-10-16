import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WishlistContext } from '../context/WishlistContext';

const Navbar = () => {
  const { wishlistedBooks } = useContext(WishlistContext);

  return (
    <nav className='fixed top-0 left-0 z-10 w-full p-4 text-white bg-slate-800'>
      <div className='container flex justify-between mx-auto'>
        <div className='text-lg font-semibold'>
          <Link to='/' className='px-4 py-2 hover:text-gray-300'>
            Book Library
          </Link>
        </div>
        <div className='flex space-x-4'>
          <Link
            to='/'
            className='px-4 py-2 bg-gray-600 rounded-md hover:text-gray-300'
          >
            Home
          </Link>
          <Link
            to='/wishlist'
            className='relative px-4 py-2 bg-gray-600 rounded-md hover:text-gray-300'
          >
            Wishlist{' '}
            <span className='absolute px-[5px] py-[3px] text-sm rounded-full -top-[10px] -right-[10px] bg-red-500'>
              {wishlistedBooks?.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
