import React from 'react';
import Rating from 'react-rating';
import EmptyStar from '../../../../../../images/EmptyStar';
import FullStar from '../../../../../../images/FullStar';
import './_index.scss';

const RatingStar = () => {
  return (
    <div>
      <Rating initialRating={4} value={5} fullSymbol={<FullStar />} emptySymbol={<EmptyStar />} />
    </div>
  );
};

export default RatingStar;
