const GenreDropdown = ({ genre, setGenre, genres }) => {
  return (
    <select
      value={genre}
      onChange={(e) => setGenre(e.target.value)}
      className='p-2 border rounded shadow-sm outline-none cursor-pointer'
    >
      <option value=''>All Genres</option>
      {genres.map((g) => (
        <option key={g} value={g}>
          {g}
        </option>
      ))}
    </select>
  );
};

export default GenreDropdown;
