import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const WishlistContext = createContext();

// Create a provider component
export const WishlistProvider = ({ children }) => {
  const [wishlistedBooks, setWishlistedBooks] = useState(
    JSON.parse(localStorage.getItem('wishlist')) || []
  );

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistedBooks));
  }, [wishlistedBooks]);

  const handleWishlist = (book) => {
    const isBookWishlisted = wishlistedBooks.some((b) => b.id === book.id);

    const updatedWishlist = isBookWishlisted
      ? wishlistedBooks.filter((b) => b.id !== book.id)
      : [...wishlistedBooks, book];

    setWishlistedBooks(updatedWishlist);
  };

  return (
    <WishlistContext.Provider value={{ wishlistedBooks, handleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
