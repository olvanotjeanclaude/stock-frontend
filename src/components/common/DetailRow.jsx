import React from 'react';
import { Typography, Box } from '@mui/material';

export default function DetailRow({ label, value, ...props }) {
    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" {...props}>
            <Typography variant="body1" color='text.secondary'>
                {label}
            </Typography>
            <Typography variant="body1">{value}</Typography>
        </Box>
    )
}
