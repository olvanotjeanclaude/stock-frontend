import React from 'react';
import Wrapper from '@/components/common/Wrapper';
import Title from '@/components/common/Title';
import { Grid2 as Grid, Box, Card, CardContent, Typography, Chip } from '@mui/material';
import { getStatusInvoiceColor } from '@/helpers/helper';
import DetailRow from '@/components/common/DetailRow';


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
      <Title title="Colis" />

      <Grid container spacing={1}>
        {invoices.map((invoice) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={invoice.invoiceNumber}>
            <Card>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h5">{invoice.customer}</Typography>
                  <Typography variant="body1" color="textSecondary">
                    {invoice.amount}
                  </Typography>
                </Box>
                
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6" fontWeight="200">{invoice.invoiceNumber}</Typography>
                  <div>
                    <Chip
                      label={invoice.status}
                      size='small'
                      style={{
                        backgroundColor: getStatusInvoiceColor(invoice.status),
                        color: 'white',
                      }}
                    />
                  </div>
                </Box>

                <DetailRow label=" date de livraison" value={invoice.date} />

              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}
