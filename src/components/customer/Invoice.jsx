"use client";

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomCard from '../common/CustomCard';  // Assuming you have a CustomCard component
import { Dialog, DialogTitle, DialogContent, IconButton, Divider, Card, CardContent, Chip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InvoiceItem from './InvoiceItem';  // Import the InvoiceItem component
import VisibilityIcon from '@mui/icons-material/Visibility';
import DetailRow from '../common/DetailRow';
import { getStatusInvoiceColor } from '@/helpers/helper';

const Invoice = ({
    invoiceNumber,
    date,
    customerName,
    items,
    totalAmount,
    paymentStatus
}) => {
    const [open, setOpen] = useState(false);

    // useEffect(() =>{
    //     console.log(open);
    // },[open]);

    const handleClickOpen = () => setOpen(true);

    const handleClose = () => { setOpen(() => false) }

    return (
        <>

            <Card onClick={handleClickOpen} sx={{cursor:"pointer"}}>
                <CardContent>
                    <Box display="flex" justifyContent="space-between">
                        <Box>
                            <Typography variant="h6">Facture #{invoiceNumber}</Typography>
                            <Typography variant="body2" color="textSecondary">
                                {date}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h5" >${totalAmount}</Typography>
                            <Chip
                                label={paymentStatus}
                                size='small'
                            style={{
                                backgroundColor: getStatusInvoiceColor(paymentStatus),
                                color: 'white',
                            }}
                            />
                        </Box>
                    </Box>
                </CardContent>
            </Card>

            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogTitle>
                    Invoice #{invoiceNumber}
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                        sx={{ position: 'absolute', right: 8, top: 8 }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Box>
                        <Typography variant="body2">Date: {date}</Typography>
                        <Divider sx={{ marginY: 1 }} />
                        <Typography variant="h6">Article</Typography>

                        {items.map((item, index) => (
                            <InvoiceItem key={index} item={item} />
                        ))}


                        <DetailRow label="Montant total" value="100 000" mt={1} />
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Invoice;
