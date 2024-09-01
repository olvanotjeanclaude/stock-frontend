import Title from '@/components/common/Title'
import ItemList from '@/components/inventory/ItemList'
import { Box, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react'
import Link from 'next/link';

export const metadata = {
  title: "Nouvelle Vente"
};

export default function Page() {
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Title title="Nouvelle Vente" />
        <Link href="/sales/create">
          <Button variant='contained' startIcon={<AddIcon />}>
            Nouveau
          </Button>
        </Link>
      </Box>
      
    </>
  )
}
