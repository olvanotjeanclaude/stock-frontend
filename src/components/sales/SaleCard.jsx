import React from 'react'
import { Box, Card, CardContent, Typography, Chip } from '@mui/material';
import { getStatusInvoiceColor } from '@/helpers/helper';


export default function SaleCard({ invoice }) {
    return (
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

                <Typography variant="body2" color="textSecondary">
                    {invoice.date}
                </Typography>
            </CardContent>
        </Card>
    )
}
