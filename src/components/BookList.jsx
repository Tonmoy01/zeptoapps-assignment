import React, { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

const BookList = ({ books, isLoading }) => {
  const { wishlistedBooks, handleWishlist } = useContext(WishlistContext);

  return (
    <div className='grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        books?.map((book) => (
          <div
            key={book.id}
            className='relative p-4 overflow-hidden transition-transform border rounded-lg shadow-sm hover:scale-105'
          >
            {/* Book Cover Image */}
            <img
              src={book.formats?.['image/jpeg']}
              alt={book.title}
              className='object-cover w-full h-48 mb-2 rounded-md sm:h-56'
            />

            <div className='w-full h-[1px] bg-slate-200 my-4'></div>

            {/* Book Title and Details */}
            <h3 className='text-lg font-semibold text-gray-800'>
              {book.title.length > 40
                ? `${book.title.substring(0, 40)}...`
                : book.title}
            </h3>
            <p className='text-sm text-gray-600'>
              By: {book?.authors?.map((author) => author.name).join(', ')}
            </p>
            <p className='text-sm text-gray-500'>Genre: {book.subjects?.[0]}</p>

            {/* Wishlist Button */}
            <button
              onClick={() => handleWishlist(book)}
              className='absolute p-2 bg-white rounded-full shadow-md top-4 right-4 focus:outline-none'
            >
              {wishlistedBooks.some((b) => b.id === book.id) ? (
                <FaHeart size={24} color='red' />
              ) : (
                <FaRegHeart size={24} color='black' />
              )}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default BookList;
