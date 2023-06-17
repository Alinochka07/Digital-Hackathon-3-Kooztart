import React from 'react';
import OpticianContent from '..';
import OpticianContainer from '../optician-container/OpticianContainer';
import './_Grid.scss';

const Grid = () => {
  return (
    <div className="grid__template">
      <OpticianContent />
      <OpticianContainer />
    </div>
  );
};

export default Grid;
