import React, { createContext, useState, useEffect } from 'react';
import { fetchBooks } from '../utils/fetchBooks';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(
    localStorage.getItem('page') ? Number(localStorage.getItem('page')) : 1
  );
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem('searchQuery') || ''
  );
  const [genre, setGenre] = useState(localStorage.getItem('genre') || '');
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [genres, setGenres] = useState([]);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('searchQuery', searchQuery);
    localStorage.setItem('genre', genre);
    localStorage.setItem('page', page);
  }, [searchQuery, genre, page]);

  useEffect(() => {
    searchQuery && setPage(1);
  }, [searchQuery]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setIsLoading(true);
      const data = await fetchBooks(
        page,
        searchQuery,
        genre,
        controller.signal
      );
      setBooks(data.books);
      setGenres(data.genres);
      setTotalPages(Math.ceil(data.count / 20));
      setIsLoading(false);
    };

    const timeout = setTimeout(fetchData, 300);
    return () => {
      clearTimeout(timeout);
      controller.abort('Resolve');
    };
  }, [page, searchQuery, genre]);

  // Function to reset filters and pagination
  const resetFiltersAndPagination = () => {
    setSearchQuery('');
    setGenre('');
    setPage(1);

    // Clear localStorage values
    localStorage.removeItem('searchQuery');
    localStorage.removeItem('genre');
    localStorage.setItem('page', '1');
  };

  return (
    <BookContext.Provider
      value={{
        books,
        page,
        setPage,
        searchQuery,
        setSearchQuery,
        genre,
        setGenre,
        genres,
        totalPages,
        isLoading,
        resetFiltersAndPagination,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
