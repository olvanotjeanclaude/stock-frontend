import React from 'react';
import { Box, Card, CardContent } from '@mui/material';

const CustomCard = ({ children, ...props }) => {
  return (
    <Card sx={{ borderRadius: { xs: 0, sm: 'default' } }}  {...props}>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

export default CustomCard;
