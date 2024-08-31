import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import CustomCard from './CustomCard';

const ItemCard = ({ avatarSrc, itemName, category, unit, quantity }) => {
    return (
        <CustomCard
            sx={{
                display: 'flex',
                alignItems:"center",
                padding: 2,
                marginBottom: 1,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Avatar
                src={avatarSrc}
                alt={itemName}
                sx={{
                    width: 50,
                    height: 50,
                    marginRight: 2,
                }}
            />
            <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" fontSize="1rem" component="div" fontWeight={400}>
                    {itemName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {category}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <Typography variant="h6" component="div">
                    {quantity}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {unit}
                </Typography>
            </Box>
        </CustomCard>
    );
};

export default ItemCard;
