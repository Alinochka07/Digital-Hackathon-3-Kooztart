import React from 'react';
import MediaItem from '../media-item/MediaItem';
import Typography from '../typography/Typography';
import './_MedicineBox.scss';

const MedicineBox = () => {
  return (
    <div className='main__medicine_box'>
      <Typography />
      <MediaItem />
    </div>
  );
};

export default MedicineBox;
