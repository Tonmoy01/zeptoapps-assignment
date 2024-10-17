import React, { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';
import { FaHeart } from 'react-icons/fa';

const WishlistPage = () => {
  const { wishlistedBooks, handleWishlist } = useContext(WishlistContext);

  return (
    <div className='container p-4 mx-auto'>
      <h1 className='mb-4 text-2xl font-bold'>Wishlist</h1>
      {wishlistedBooks.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
          {wishlistedBooks?.map((book) => (
            <div key={book?.id} className='relative p-4 border rounded-lg'>
              <img
                src={book?.formats?.['image/jpeg']}
                alt={book?.title}
                className='object-cover w-full h-48 mb-2'
              />
              <h3 className='text-lg font-semibold'>{book?.title}</h3>
              <p>
                By: {book?.authors?.map((author) => author.name).join(', ')}
              </p>
              <button
                onClick={() => handleWishlist(book)}
                className='absolute p-2 bg-white rounded-full shadow-md top-4 right-4 focus:outline-none'
              >
                <FaHeart size={24} color='red' />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
