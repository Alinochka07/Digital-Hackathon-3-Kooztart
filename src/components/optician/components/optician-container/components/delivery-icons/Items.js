import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';

const Items = ({ title, Icon }) => {
  return (
    <div className='root_items'>
      <Box className="items">{Icon}</Box>
      <Typography className='title__root'>{title}</Typography>
    </div>
  );
};

export default Items;
