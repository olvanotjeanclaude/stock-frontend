import React from 'react';
import ItemCard from '../common/ItemCard';
import Link from 'next/link';
import { Box, Grid2 as Grid } from '@mui/material';

const ItemList = () => {
    const mockItems = [
        {
            avatarSrc: 'https://via.placeholder.com/50?text=A',
            itemName: 'Apples',
            category: 'Fruits',
            unit: 'Kg',
            quantity: '25',
        },
        {
            avatarSrc: 'https://via.placeholder.com/50?text=B',
            itemName: 'Bananas',
            category: 'Fruits',
            unit: 'Kg',
            quantity: '30',
        },
        {
            avatarSrc: 'https://via.placeholder.com/50?text=M',
            itemName: 'Milk',
            category: 'Dairy',
            unit: 'Liters',
            quantity: '15',
        },
        {
            avatarSrc: 'https://via.placeholder.com/50?text=B',
            itemName: 'Bread',
            category: 'Bakery',
            unit: 'Pieces',
            quantity: '40',
        },
        {
            avatarSrc: 'https://via.placeholder.com/50?text=E',
            itemName: 'Eggs',
            category: 'Dairy',
            unit: 'Dozens',
            quantity: '10',
        },
        {
            avatarSrc: 'https://via.placeholder.com/50?text=C',
            itemName: 'Carrots',
            category: 'Vegetables',
            unit: 'Kg',
            quantity: '20',
        },
        {
            avatarSrc: 'https://via.placeholder.com/50?text=P',
            itemName: 'Potatoes',
            category: 'Vegetables',
            unit: 'Kg',
            quantity: '50',
        },
        {
            avatarSrc: 'https://via.placeholder.com/50?text=C',
            itemName: 'Chicken',
            category: 'Meat',
            unit: 'Kg',
            quantity: '12',
        },
        {
            avatarSrc: 'https://via.placeholder.com/50?text=R',
            itemName: 'Rice',
            category: 'Grains',
            unit: 'Kg',
            quantity: '100',
        },
        {
            avatarSrc: 'https://via.placeholder.com/50?text=O',
            itemName: 'Orange Juice',
            category: 'Beverages',
            unit: 'Liters',
            quantity: '30',
        },
    ];

    return (
        <Grid container spacing={1}>
            {mockItems.map((item, index) => (
                <Grid key={index} size={{ xs: 12, md: 6, lg:4 }}>
                    <Link href={`/inventory/items/${index}`}>
                        <ItemCard
                            key={index}
                            avatarSrc={item.avatarSrc}
                            itemName={item.itemName}
                            category={item.category}
                            unit={item.unit}
                            quantity={item.quantity}
                        />
                    </Link>
                </Grid>
            ))}
        </Grid>
    );
};

export default ItemList;
