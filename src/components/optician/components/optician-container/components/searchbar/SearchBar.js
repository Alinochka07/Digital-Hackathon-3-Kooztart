import React from 'react';
import SearchIcon from '../../../../../../images/Icons/SearchIcon';
import './_SearchBar.scss';

const SearchBar = () => {
  return (
    <div className="search__bar">
      <input type="text" placeholder="Дарыны издөө" />
      <SearchIcon />
    </div>
  );
};

export default SearchBar;
