import { GrNext, GrPrevious } from 'react-icons/gr';

const Pagination = ({ currentPage, setPage, totalPages }) => {
  const generatePageNumbers = () => {
    const pages = [];
    pages.push(1);

    if (currentPage < 3) {
      pages.push(2, 3, '...', totalPages);
    } else {
      pages.push('...');

      if (currentPage > totalPages - 2) {
        pages.push(totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(
          currentPage - 1,
          currentPage,
          currentPage + 1,
          '...',
          totalPages
        );
      }
    }

    const filteredPages = pages.filter((p) =>
      typeof p === 'number' ? p <= totalPages : true
    );

    if (filteredPages.at(0) === filteredPages.at(-1)) {
      return [filteredPages.at(0)];
    }

    if (filteredPages.at(-1) === '...') {
      filteredPages.pop();
    }

    if (filteredPages.at(0) === '...') {
      filteredPages.shift();
    }

    return filteredPages;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className='flex justify-center mt-5 mb-5 space-x-1 sm:space-x-2'>
      {/* Previous button */}
      <button
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-2 sm:px-4 py-2 text-white bg-blue-500 rounded ${
          currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <GrPrevious />
      </button>

      {/* Page number buttons */}
      {pageNumbers.map((pageNumber, index) => (
        <button
          key={index}
          onClick={() => typeof pageNumber === 'number' && setPage(pageNumber)}
          className={`px-2 sm:px-4 py-2 rounded ${
            pageNumber === currentPage
              ? 'bg-blue-700 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'
          }`}
          disabled={
            typeof pageNumber !== 'number' || pageNumber === currentPage
          }
        >
          {pageNumber}
        </button>
      ))}

      {/* Next button */}
      <button
        onClick={() => setPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-2 sm:px-4 py-2 text-white bg-blue-500 rounded ${
          currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <GrNext />
      </button>
    </div>
  );
};

export default Pagination;
