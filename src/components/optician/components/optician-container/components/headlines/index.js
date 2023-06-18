import React from 'react';
import RatingStar from '../rating';
import Accordion from './Accordion';
import Price from './Price';
import Typography from './Typography';
import './_index.scss';

const Headlines = () => {
  return (
    <div className="root__headlines">
      <Typography />
      <RatingStar />
      <Price />
      <Accordion />
    </div>
  );
};

export default Headlines;
