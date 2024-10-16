import React, { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

const BookList = ({ books, isLoading }) => {
  const { wishlistedBooks, handleWishlist } = useContext(WishlistContext);

  return (
    <div className='grid grid-cols-1 gap-4 mt-10 md:grid-cols-3 lg:grid-cols-4'>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        books?.map((book) => (
          <div
            key={book.id}
            className='relative p-4 overflow-hidden border rounded-lg shadow-sm'
          >
            <img
              src={book.formats?.['image/jpeg']}
              alt={book.title}
              className='object-cover w-full h-48 mb-2 transition-all duration-150 hover:scale-105'
            />
            <div className='w-full h-[1px] bg-slate-200 my-5'></div>
            <h3 className='text-lg font-semibold'>{book.title}</h3>
            <p>By: {book?.authors?.map((author) => author.name).join(', ')}</p>
            <p>Genre: {book.subjects?.[0]}</p>
            <button
              onClick={() => handleWishlist(book)} // Pass the entire book object
              className='absolute top-5 right-4'
            >
              {wishlistedBooks.some((b) => b.id === book.id) ? (
                <FaHeart size={25} color='red' />
              ) : (
                <FaRegHeart size={25} color='black' />
              )}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default BookList;
