"use client";

import React from 'react';
import { Box, Card, CardContent, Typography, Chip, Divider, Stack, Button, Grid2 as Grid } from '@mui/material';
import { green, orange, red, yellow } from '@mui/material/colors';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PrintIcon from '@mui/icons-material/Print';
import DownloadIcon from '@mui/icons-material/Download';
import DetailRow from '../common/DetailRow';

const invoice = {
    invoiceNumber: 'INV-001',
    date: '2024-09-01',
    customer: 'John Doe',
    amount: '$200.00',
    status: 'Payée',
    paymentMethod: 'Carte de Crédit',
    dueDate: '2024-09-15',
    transactionId: 'TRX123456',
    billingAddress: '123 Rue Principale, Springfield, IL',
    items: [
        { name: 'Produit 1', quantity: 2, unitPrice: 50, total: 100 },
        { name: 'Produit 2', quantity: 1, unitPrice: 100, total: 100 },
    ],
    notes: 'Merci pour votre achat!',
};

export default function PaymentDetail() {
    const getStatusColor = (status) => {
        switch (status) {
            case 'Payée':
                return green[500];
            case 'En attente':
                return orange[500];
            case 'En retard':
                return red[500];
            case 'Partielle':
                return yellow[700];
            default:
                return 'inherit';
        }
    };

    return (
        <>
            {/* Action Buttons */}
            <Box display="flex" p={1} gap={1} flexWrap="wrap" justifyContent="center" mb={2}>
                <Button variant="contained" color="primary" startIcon={<PrintIcon />} onClick={() => window.print()}>
                    Imprimer
                </Button>
                <Button variant="contained" color="secondary" startIcon={<DownloadIcon />}>
                    Télécharger PDF
                </Button>
                <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
                    Supprimer
                </Button>

                <Button variant="contained" color="info" startIcon={<EditIcon />}>
                    Modifier
                </Button>
            </Box>

            <Grid container spacing={2}>
                {/* Invoice Information */}
                <Grid size={{ xs: 12}}>
                    <Card sx={{ borderRadius: { xs: 0, sm: 'default' } }}>
                        <CardContent>
                            <Box display="flex" flexDirection="column" gap={1}>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Typography variant="h5" noWrap>
                                        {invoice.invoiceNumber}
                                    </Typography>

                                    <Chip
                                        size='small'
                                        label={invoice.status}
                                        style={{
                                            backgroundColor: getStatusColor(invoice.status),
                                            color: 'white',
                                        }}
                                    />
                                </Box>
                                <DetailRow label="Date" value={invoice.date} />
                                <DetailRow label="Client" value={invoice.customer} />
                                <Box>
                                    <Typography variant="body1" color='text.secondary'>
                                        Adresse de facturation
                                    </Typography>
                                    <Typography variant="body1">{invoice.billingAddress}</Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Payment Details */}
                <Grid size={{ xs: 12}}>
                    <Card sx={{ borderRadius: { xs: 0, sm: 'default' } }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Détails du paiement
                            </Typography>
                            <DetailRow label="Méthode de paiement" value={invoice.paymentMethod} />
                            <DetailRow label="Date d'échéance" value={invoice.dueDate} />
                            <DetailRow label="ID de transaction" value={invoice.transactionId} />
                        </CardContent>
                    </Card>
                </Grid>


                {/* Items */}
                <Grid size={12}>
                    <Card sx={{ borderRadius: { xs: 0, sm: 'default' } }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Articles
                            </Typography>
                            {invoice.items.map((item, index) => (
                                <React.Fragment key={index}>
                                    <Box display="flex" p={0.5} justifyContent="space-between" alignItems="center">
                                        <Typography variant="body2" fontWeight="bold">
                                            {item.name}
                                        </Typography>
                                        <Box display="flex" gap={1}>
                                            <Stack sx={{ textAlign: "right" }}>
                                                <Typography variant="caption" fontWeight="bold">
                                                    {item.quantity * item.unitPrice}
                                                </Typography>
                                                <Typography variant="caption" color="textSecondary">
                                                    {item.quantity} x {item.unitPrice}
                                                </Typography>
                                            </Stack>
                                        </Box>
                                    </Box>
                                    <Divider />
                                </React.Fragment>
                            ))}
                            <br />
                            <DetailRow label="Montant total" value={invoice.amount} />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <Card sx={{ borderRadius: { xs: 0, sm: 'default' } }}>
                        <CardContent>
                            {invoice.notes && (
                                <>
                                    <Typography variant="h6" gutterBottom>
                                        Remarques
                                    </Typography>
                                    <DetailRow label="Remarques" value={invoice.notes} />
                                </>
                            )}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}
