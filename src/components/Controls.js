import React from 'react';

const Controls = ({ itemsPerPage, setItemsPerPage, limit, setLimit }) => {
  const handleItemsPerPageChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value <= 0) {
      alert("Items Per Page cannot be less than 1");
      return;
    }
    setItemsPerPage(value);
  };

  const handleLimitChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value <= 0) {
      alert("Limit cannot be less than 1");
      return;
    }
    setLimit(value);
  };

  return (
    <div className="controls">
      <div>
        <label htmlFor="itemsPerPage">Items Per Page:</label>
        <input
          id="itemsPerPage"
          type="number"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
        />
      </div>
      <div>
        <label htmlFor="limit">API Request Limit:</label>
        <input
          id="limit"
          type="number"
          value={limit}
          onChange={handleLimitChange}
        />
      </div>
    </div>
  );
};

export default Controls;
