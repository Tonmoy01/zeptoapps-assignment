import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WishlistPage from './pages/WishlistPage';
import { WishlistProvider } from './context/WishlistContext';
import HomePage from './pages/HomePage';
import { BookProvider } from './context/BookContext';

const App = () => {
  return (
    <WishlistProvider>
      <BookProvider>
        <Router>
          <Navbar />
          <div className='container px-5 mx-auto mt-24'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/wishlist' element={<WishlistPage />} />
            </Routes>
          </div>
        </Router>
      </BookProvider>
    </WishlistProvider>
  );
};

export default App;
