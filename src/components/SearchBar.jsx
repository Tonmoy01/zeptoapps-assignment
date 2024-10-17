const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type='text'
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder='Search books by title...'
      className='w-full p-2 border rounded shadow-sm outline-none sm:w-9/12 md:w-3/4 lg:w-11/12'
    />
  );
};

export default SearchBar;
