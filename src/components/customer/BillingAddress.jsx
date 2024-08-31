import React from 'react';
import CustomCard from '../common/CustomCard';
import Subtitle from '../common/Subtitle';
import Typography from '@mui/material/Typography';

const BillingAddress = ({ address }) => (
    <CustomCard>
        <Subtitle title="Billing Address" />
        <Typography variant="body2" color="text.secondary">{address}</Typography>
    </CustomCard>
);

export default BillingAddress;
