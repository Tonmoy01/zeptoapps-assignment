const GenreDropdown = ({ genre, setGenre, genres }) => {
  return (
    <select
      value={genre}
      onChange={(e) => setGenre(e.target.value)}
      className='w-full p-2 border rounded shadow-sm outline-none cursor-pointer sm:w-3/5 md:w-1/2 lg:w-1/3'
    >
      <option value=''>All Genres</option>
      {genres.map((g) => (
        <option key={g} className='w-32' value={g}>
          {g}
        </option>
      ))}
    </select>
  );
};

export default GenreDropdown;
