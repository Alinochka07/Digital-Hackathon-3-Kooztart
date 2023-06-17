import React from 'react';
import Headlines from './headlines/Headlines';
import OpticianBar from './optician-bar/OpticianBar';
import './_index.scss';

const OpticianContent = () => {
  return (
    <div className="main__content">
      <Headlines />
      <OpticianBar />
    </div>
  );
};

export default OpticianContent;
