import React from 'react';
import OpticianCart from '../optician-cart/OpticianCart';
import OpticianCounter from '../optician-counter/OpticianCounter';
import './_OpticianBox.scss';

const OpticianBox = () => {
  return (
    <div className='main__optician__box'>
      <OpticianCounter />
      <OpticianCart />
    </div>
  );
};

export default OpticianBox;
