import Title from '@/components/common/Title'
import Wrapper from '@/components/common/Wrapper';
import CustomerList from '@/components/customer/CustomerList';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react'
import Link from 'next/link';

export const metadata = {
  title: "Clients"
};


export default function Page() {
  return (
    <Wrapper>

      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
      <Title title="Clients" />
        <Link href="/customers/create">
          <Button variant="contained" startIcon={<AddIcon />}>
            Ajouter
          </Button>
        </Link>
      </Box>

      <CustomerList />
    </Wrapper>
  )
}
