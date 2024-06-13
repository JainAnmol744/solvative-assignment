import React from 'react';

const Pagination = ({ dataLength, itemsPerPage, currentPage, setCurrentPage }) => {
  const handleClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="pagination" style={{ paddingLeft: "5%" }}>
      Total {Math.ceil(dataLength / itemsPerPage)} Pages
      {Array.from({ length: Math.ceil(dataLength / itemsPerPage) }, (_, index) => index + 1).map((page) => (
        <button
          className="mx-2"
          key={page}
          onClick={() => handleClick(page)}
          style={{ border: "2px solid grey" }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
