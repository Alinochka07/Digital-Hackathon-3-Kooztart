import React from 'react';
import { devliveryData } from './data';
import Items from './Items';

const Lists = () => {
  return (
    <div className="lists">
      {devliveryData.map((item) => (
        <Items key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Lists;
