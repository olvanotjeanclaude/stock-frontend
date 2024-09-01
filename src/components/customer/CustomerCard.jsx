import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Card, CardContent, Stack } from '@mui/material';

const CustomerCard = ({ firstName, surname, email, phone, address }) => {
    return (
        <Card>
            <CardContent>
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
                    <Stack>
                        <Typography variant="p" component="div">
                            {firstName} {surname}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {email}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {phone}
                        </Typography>
                    </Stack>
                </Box>
                
                <Typography mt={1} variant="body2">
                    {address}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CustomerCard;
