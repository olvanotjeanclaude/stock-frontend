import Title from '@/components/common/Title'
import BasicInfoDetail from '@/components/item/BasicInfoDetail'
import CategoryDetail from '@/components/item/CategoryDetail';
import PriceDetails from '@/components/item/PriceDetails';
import StockDetails from '@/components/item/StockDetails';
import { Box, Card, CardContent, Grid2 } from '@mui/material';
import React from 'react'

// Sample item data
const product = {
  basic: {
    name: 'Product Name',
    sku: '12345',
    unit: 'kg',
    isReturnable: true,
    description: 'Product description here',
  },
  price: {
    sellingPrice: {
      currency: 'usd',
      value: '50.00',
    },
    costPrice: {
      currency: 'usd',
      value: '30.00',
    },
  },
  stock: {
    quantityAvailable: 50,
    openingStock: 100,
    reorderPoint: 10,
    openingStockRatePerUnit: '$ 5.00',
  },
  vendor:{
    name: "STAR"
  },
  category: 'Electronics',
};

export default function Page({ params }) {
  return (
    <>
      <Title title={`Item Detail : ${JSON.stringify(params)}`} />

      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12 }}>
          <BasicInfoDetail product={product} />
        </Grid2>

        <Grid2 size={{ xs: 12 }}>
          <PriceDetails prices={product.price} />
        </Grid2>

        <Grid2 size={{ xs: 12 }}>
          <StockDetails stock={product.stock} vendor={product.vendor} />
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
          <CategoryDetail />
        </Grid2>
      </Grid2>
    </>
  )
}
