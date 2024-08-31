"use client";

import React, {  useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomCard from '../common/CustomCard';  // Assuming you have a CustomCard component
import { Dialog, DialogTitle, DialogContent, IconButton, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InvoiceItem from './InvoiceItem';  // Import the InvoiceItem component
import VisibilityIcon from '@mui/icons-material/Visibility';

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
        <Box sx={{ cursor: 'pointer' }}>
            <CustomCard>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="h6">Invoice #{invoiceNumber}</Typography>
                    <IconButton color="primary" onClick={handleClickOpen}>
                        <VisibilityIcon />
                    </IconButton>
                </Box>
                <Typography variant="body2" color="text.secondary">Date: {date}</Typography>
                <Typography variant="body2" color="text.secondary">Customer: {customerName}</Typography>
                <Typography variant="body2" color="text.secondary">Total: ${totalAmount}</Typography>
                <Typography variant="body2" color="text.secondary">Status: {paymentStatus}</Typography>
            </CustomCard>

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
                        <Typography variant="body2" color="text.secondary">Date: {date}</Typography>
                        <Typography variant="body2" color="text.secondary">Customer: {customerName}</Typography>
                        <Divider sx={{ marginY: 1 }} />
                        <Typography variant="h6">Items</Typography>
                        {items.map((item, index) => (
                            <InvoiceItem key={index} {...item} />
                        ))}
                        <Divider sx={{ marginY: 1 }} />
                        <Typography variant="h6">Total Amount</Typography>
                        <Typography variant="body1">${totalAmount}</Typography>
                        <Typography variant="body2" color="text.secondary">Payment Status: {paymentStatus}</Typography>
                    </Box>
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default Invoice;
