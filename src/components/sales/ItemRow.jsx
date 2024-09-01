import React from 'react';
import { Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ItemRow({ item, onDelete }) {
    return (
        <>
            <Box display="flex" p={0.5} justifyContent="space-between" alignItems="center">
                <Typography variant="h6">
                    {item.name}
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
                    <IconButton onClick={onDelete} size='small' color="secondary">
                        <DeleteIcon  />
                    </IconButton>
                </Box>
            </Box>
            <Divider />
        </>
    );
}
