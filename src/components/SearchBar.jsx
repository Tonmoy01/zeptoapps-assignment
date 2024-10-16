const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type='text'
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder='Search books by title...'
      className='w-11/12 p-2 border rounded shadow-sm outline-none'
    />
  );
};

export default SearchBar;
