import React from 'react';
import DevliveryIcons from './delivery-icons';
import HeadBar from './headbar/HeadBar';
import Headlines from './headlines';
import './_index.scss';

const OpticianContainerContent = () => {
  return (
    <div className="main__optician__bar__container">
      <HeadBar />
      <Headlines />
      <DevliveryIcons />
    </div>
  );
};

export default OpticianContainerContent;
