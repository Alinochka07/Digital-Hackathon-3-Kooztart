import React from 'react';
import MedicineBox from './medicine-box/MedicineBox';
import OpticianBox from './optician-box/OpticianBox';
import SearchBar from './search-bar/SearchBar';
import './_index.scss';

const OpticianBarContent = () => {
  return (
    <div className="main__optician__bar">
      <MedicineBox />
      <SearchBar />
      <OpticianBox />
    </div>
  );
};

export default OpticianBarContent;
