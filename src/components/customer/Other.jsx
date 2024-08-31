import React from 'react';
import CustomCard from '../common/CustomCard';
import Subtitle from '../common/Subtitle';
import Typography from '@mui/material/Typography';

const Other = ({ currency }) => (
    <CustomCard>
        <Subtitle title="Other" />
        <Typography variant="body2" color="text.secondary">{`Currency: ${currency}`}</Typography>
    </CustomCard>
);

export default Other;
