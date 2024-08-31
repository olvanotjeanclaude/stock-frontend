import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const CustomerCard = ({ firstName, surname, email, phone, address }) => {
    return (
        <Paper
            sx={{
                padding: 2,
                marginBottom: 2,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Box display="flex" alignItems="center" gap={1}>
                <Avatar
                    sx={{
                        width: 35,
                        height: 35,
                        backgroundColor: '#1976d2', // Example background color
                        color: '#fff', // Text color
                        fontSize: '1.5rem', // Adjust text size
                    }}
                >
                    {firstName[0]} 
                </Avatar>
                <Typography variant="p" component="div">
                    {firstName} {surname}
                </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }} mt={1}>
                <Typography variant="body2" color="text.secondary">
                    {email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {phone}
                </Typography>
            </Box>
            <Typography variant="body2">
                {address}
            </Typography>
        </Paper>
    );
};

export default CustomerCard;
