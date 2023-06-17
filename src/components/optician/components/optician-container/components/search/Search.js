import React from 'react';
import Cart from '../../../../../../images/Cart';
import SearchBar from '../searchbar/SearchBar';
import './_Search.scss';

const Search = () => {
  return (
    <div className='main__optician__bar__search'>
      <SearchBar />
      <div className="cart">
        <Cart fill="#E84F6D" color="#E84F6D" />
      </div>
    </div>
  );
};

export default Search;
