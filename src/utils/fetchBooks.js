export async function fetchBooks(page = 1, searchQuery = '', genreFilter = '') {
  let url = `https://gutendex.com/books?search=${searchQuery}&page=${page}`;

  if (genreFilter) {
    url += `&topic=${genreFilter}`;
  }

  const response = await fetch(url);
  const data = await response.json();

  const genres = new Set();
  data.results.forEach((book) => {
    book.subjects.forEach((subject) => {
      genres.add(subject);
    });
  });

  return { books: data.results, genres: Array.from(genres), count: data.count };
}
