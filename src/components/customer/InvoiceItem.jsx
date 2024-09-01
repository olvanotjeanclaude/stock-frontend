import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Divider, Stack } from '@mui/material';

const InvoiceItem = ({ item }) => (
    <React.Fragment >
        <Box display="flex" p={0.2} justifyContent="space-between" alignItems="center">
            <Typography variant="body2" fontWeight="bold">
                {item.description}
            </Typography>
            <Box display="flex" gap={1}>
                <Stack sx={{ textAlign: "right" }}>
                    <Typography variant="caption" fontWeight="bold">
                        {item.quantity * item.unitPrice}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                        {item.quantity} x {item.unitPrice}
                    </Typography>
                </Stack>
            </Box>
        </Box>
        <Divider />
    </React.Fragment>
);

export default InvoiceItem;

