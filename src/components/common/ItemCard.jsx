import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import CustomCard from './CustomCard';

const ItemCard = ({ avatarSrc, itemName, category, unit, quantity }) => {
    return (
        <CustomCard sx={{ borderRadius: "default" }}>
            <Box display="flex" gap={1}>
                <Avatar
                    src={avatarSrc}
                    alt={itemName}
                    sx={{
                        width: 40,
                        height: 40,
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
            </Box>
        </CustomCard>
    );
};

export default ItemCard;
