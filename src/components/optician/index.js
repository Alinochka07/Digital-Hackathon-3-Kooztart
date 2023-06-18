import React from 'react';
import Grid from './components/grid/Grid';
import Headlines from './components/headlines/Headlines';
import './_index.scss';
import SameProducts from './components/sameProducts/SameProducts';

const Optician = () => {
  return (
    <div className="optician">
      <div className="container">
        <Headlines />
        <Grid />
        <SameProducts/>
      </div>
    </div>
  );
};

export default Optician;
