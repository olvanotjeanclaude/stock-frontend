import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const InvoiceItem = ({ description, quantity, unitPrice, totalPrice }) => (
    <Box display="flex" justifyContent="space-between" paddingY={1}>
        <Typography variant="body2">{description}</Typography>
        <Typography variant="body2">{quantity}</Typography>
        <Typography variant="body2">{unitPrice}</Typography>
        <Typography variant="body2">{totalPrice}</Typography>
    </Box>
);

export default InvoiceItem;
