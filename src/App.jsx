import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WishlistPage from './pages/WishlistPage';
import { WishlistProvider } from './context/WishlistContext';
import HomePage from './pages/HomePage';
import { fetchBooks } from './utils/fetchBooks';

// async function fetchBooks(page = 1, searchQuery = '', genreFilter = '') {
//   let url = `https://gutendex.com/books?search=${searchQuery}&page=${page}`;

//   if (genreFilter) {
//     url += `&topic=${genreFilter}`;
//   }

//   const response = await fetch(url);
//   const data = await response.json();

//   const genres = new Set();
//   data.results.forEach((book) => {
//     book.subjects.forEach((subject) => {
//       genres.add(subject);
//     });
//   });

//   return { books: data.results, genres: Array.from(genres), count: data.count };
// }

const App = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [genre, setGenre] = useState('');
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await fetchBooks(page, searchQuery, genre);
      setBooks(data.books);
      setGenres(data.genres);
      setTotalPages(Math.ceil(data.count / 20));
      setIsLoading(false);
    };

    fetchData();
  }, [page, searchQuery, genre]);

  return (
    <WishlistProvider>
      <Router>
        <Navbar />
        <div className='container mx-auto mt-24'>
          <Routes>
            <Route
              path='/'
              element={
                <HomePage
                  books={books}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  genre={genre}
                  setGenre={setGenre}
                  genres={genres}
                  page={page}
                  setPage={setPage}
                  totalPages={totalPages}
                  isLoading={isLoading}
                />
              }
            />
            <Route path='/wishlist' element={<WishlistPage />} />
          </Routes>
        </div>
      </Router>
    </WishlistProvider>
  );
};

export default App;
