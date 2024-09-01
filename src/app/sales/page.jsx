import React from 'react';
import { Box, Button, Grid2 as Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';
import SaleCard from '@/components/sales/SaleCard';
import Wrapper from '@/components/common/Wrapper';

const invoices = [
  { invoiceNumber: 'INV-001', date: '2024-09-01', customer: 'John Doe', amount: '200.00 Ar', status: 'Paid' },
  { invoiceNumber: 'INV-002', date: '2024-09-02', customer: 'Jane Smith', amount: '350.00 Ar', status: 'Pending' },
  { invoiceNumber: 'INV-003', date: '2024-09-03', customer: 'Mark Johnson', amount: '120.00 Ar', status: 'Overdue' },
  { invoiceNumber: 'INV-004', date: '2024-09-04', customer: 'Emily Davis', amount: '500.00 Ar', status: 'Partial' },
  { invoiceNumber: 'INV-005', date: '2024-09-05', customer: 'Michael Brown', amount: '275.00 Ar', status: 'Pending' },
];

export default function Page() {

  return (
    <Wrapper>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h4">Factures</Typography>
        <Link href="/sales/create">
          <Button variant="contained" startIcon={<AddIcon />}>
            Ajouter
          </Button>
        </Link>
      </Box>

      <Grid container spacing={1}>
        {invoices.map((invoice) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={invoice.invoiceNumber}>
            <Link href={`/sales/${invoice.invoiceNumber}`}>
              <SaleCard invoice={invoice} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}
