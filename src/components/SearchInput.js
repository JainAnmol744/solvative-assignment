import React from 'react';

const SearchInput = ({ text, setText, inputRef, handleKeyDown }) => (
  <div className="input-wrapper">
    <input
      ref={inputRef}
      className='search_box'
      value={text}
      placeholder='Enter the city name'
      onChange={(e) => setText(e.target.value)}
      onKeyDown={handleKeyDown}
    />
    <span className="shortcut">Ctrl + /</span>
  </div>
);

export default SearchInput;
