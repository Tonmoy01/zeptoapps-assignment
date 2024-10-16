const Pagination = ({ currentPage, setPage, totalPages }) => {
  const generatePageNumbers = () => {
    const pages = [];

    if (currentPage > 2) {
      pages.push(1);
    }

    if (currentPage > 3) {
      pages.push('...');
    }

    for (
      let i = Math.max(2, currentPage - 2);
      i <= Math.min(currentPage + 2, totalPages - 1);
      i++
    ) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push('...');
    }

    if (currentPage < totalPages - 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className='flex justify-center mt-5 mb-5 space-x-2'>
      {/* Previous button */}
      <button
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 text-white bg-blue-500 rounded ${
          currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        Previous
      </button>

      {/* Page number buttons */}
      {pageNumbers.map((pageNumber, index) => (
        <button
          key={index}
          onClick={() => typeof pageNumber === 'number' && setPage(pageNumber)}
          className={`px-4 py-2 rounded ${
            pageNumber === currentPage
              ? 'bg-blue-700 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'
          }`}
          disabled={typeof pageNumber !== 'number'}
        >
          {pageNumber}
        </button>
      ))}

      {/* Next button */}
      <button
        onClick={() => setPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 text-white bg-blue-500 rounded ${
          currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
