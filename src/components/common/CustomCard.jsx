import React from 'react';
import { Box } from '@mui/material';

const CustomCard = ({children,...props}) => {
  return (
    <Box p={2} borderRadius={1} bgcolor="#fff" {...props}>
        {children}
    </Box>
  );
};

export default CustomCard;
