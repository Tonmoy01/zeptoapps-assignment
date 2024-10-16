import React, { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';

const WishlistPage = () => {
  const { wishlistedBooks, handleWishlist } = useContext(WishlistContext);
  const placeholderImage = 'https://via.placeholder.com/150';

  return (
    <div className='container p-4 mx-auto'>
      <h1 className='mb-4 text-2xl font-bold'>Wishlist</h1>
      {wishlistedBooks.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
          {wishlistedBooks?.map((book) => (
            <div key={book?.id} className='p-4 border rounded-lg'>
              <img
                src={book?.formats?.['image/jpeg'] || placeholderImage}
                alt={book?.title}
                className='object-cover w-full h-48 mb-2'
              />
              <h3 className='text-lg font-semibold'>{book?.title}</h3>
              <p>
                By: {book?.authors?.map((author) => author.name).join(', ')}
              </p>
              <button
                onClick={() => handleWishlist(book)}
                className='px-2 py-1 mt-2 text-white bg-red-500 rounded'
              >
                Remove from Wishlist
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
