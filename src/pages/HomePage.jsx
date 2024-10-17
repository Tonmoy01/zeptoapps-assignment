import React, { useContext } from 'react';
import SearchBar from '../components/SearchBar';
import GenreDropdown from '../components/GenreDropdown';
import BookList from '../components/BookList';
import Pagination from '../components/Pagination';
import { BookContext } from '../context/BookContext';

const HomePage = () => {
  const {
    books,
    searchQuery,
    setSearchQuery,
    genre,
    setGenre,
    genres,
    page,
    setPage,
    totalPages,
    isLoading,
  } = useContext(BookContext);

  return (
    <>
      <div className='flex flex-col justify-center gap-2 mt-5 md:flex-row'>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <GenreDropdown genre={genre} setGenre={setGenre} genres={genres} />
      </div>
      <BookList books={books} isLoading={isLoading} />
      <Pagination
        currentPage={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default HomePage;
