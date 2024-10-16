import React from 'react';
import SearchBar from '../components/SearchBar';
import GenreDropdown from '../components/GenreDropdown';
import BookList from '../components/BookList';
import Pagination from '../components/Pagination';

const HomePage = ({
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
}) => {
  return (
    <>
      <div className='flex justify-center gap-2 mt-5'>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <GenreDropdown genre={genre} setGenre={setGenre} genres={genres} />{' '}
      </div>
      <BookList books={books} isLoading={isLoading} />{' '}
      <Pagination
        currentPage={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default HomePage;
