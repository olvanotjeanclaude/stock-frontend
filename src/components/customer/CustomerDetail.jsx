"use client";

import React, { useState } from 'react';
import BasicInfo from './BasicInfo';
import BillingAddress from './BillingAddress';
import SocialMedia from './SocialMedia';
import Other from './Other';
import ContactPersons from './ContactPersons';
import Comments from './Comments';
import { Box, Button, Grid2 as Grid, Stack, Tab, Tabs } from '@mui/material';
import Invoice from './Invoice';
import { a11yProps } from '@/helpers/helper';
import TabPanel from '../common/TabPanel';
import Subtitle from '../common/Subtitle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const CustomerDetail = ({ customer }) => {

    const [value, setValue] = useState(0);

    const {
        avatarSrc,
        firstName,
        surname,
        telephone,
        email,
        billingAddress,
        socialMedia,
        currency,
        contactPersons,
        comments,
    } = customer;


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const invoices = [
        {
            invoiceNumber: '001',
            date: '2024-08-30',
            customerName: 'John Doe',
            items: [
                { description: 'Product A', quantity: 2, unitPrice: 50, totalPrice: 100 },
                { description: 'Product B', quantity: 1, unitPrice: 75, totalPrice: 75 }
            ],
            totalAmount: 175,
            paymentStatus: 'Paid'
        },
        {
            invoiceNumber: '002',
            date: '2024-08-31',
            customerName: 'Jane Smith',
            items: [
                { description: 'Service X', quantity: 1, unitPrice: 200, totalPrice: 200 },
                { description: 'Service Y', quantity: 3, unitPrice: 50, totalPrice: 150 }
            ],
            totalAmount: 350,
            paymentStatus: 'Pending'
        },
        {
            invoiceNumber: '003',
            date: '2024-09-01',
            customerName: 'Emily Johnson',
            items: [
                { description: 'Product C', quantity: 4, unitPrice: 25, totalPrice: 100 },
                { description: 'Product D', quantity: 2, unitPrice: 30, totalPrice: 60 }
            ],
            totalAmount: 160,
            paymentStatus: 'Paid'
        }
    ];

    return (
        <>
            <Box display="flex" p={1} gap={1} flexWrap="wrap" justifyContent="center" mb={2}>
                <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
                    Supprimer
                </Button>

                <Button variant="contained" color="info" startIcon={<EditIcon />}>
                    Modifier
                </Button>
            </Box>

            <Grid container spacing={1}>
                <Grid size={{ xs: 12 }}>
                    <BasicInfo
                        avatarSrc={avatarSrc}
                        firstName={firstName}
                        surname={surname}
                        telephone={telephone}
                        email={email}
                    />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <BillingAddress address={billingAddress} />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <Comments comments={comments} />
                </Grid>
            </Grid>


            <Box display="none">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="Customer Detail Tabs"
                    variant="scrollable"
                    scrollButtons="auto"
                    allowScrollButtonsMobile
                >
                    <Tab label="Social Media" {...a11yProps(0)} />
                    <Tab label="Other" {...a11yProps(1)} />
                    <Tab label="Contact Persons" {...a11yProps(2)} />
                </Tabs>

                <TabPanel value={value} index={0}>
                    <SocialMedia socialMedia={socialMedia} />
                </TabPanel>

                <TabPanel value={value} index={1}>
                    <Other currency={currency} />
                </TabPanel>

                <TabPanel value={value} index={2}>
                    <ContactPersons contactPersons={contactPersons} />
                </TabPanel>
            </Box>


            <Subtitle ml={2} mt={2} title="Factures" />

            <Grid container spacing={{ xs: 0, sm: 2 }}>
                {invoices.map((invoice) => (
                    <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={invoice.invoiceNumber}>
                        <Invoice
                            key={invoice.invoiceNumber}
                            invoiceNumber={invoice.invoiceNumber}
                            date={invoice.date}
                            customerName={invoice.customerName}
                            items={invoice.items}
                            totalAmount={invoice.totalAmount}
                            paymentStatus={invoice.paymentStatus}
                        />
                    </Grid>
                ))}
            </Grid>

        </>
    );
};

export default CustomerDetail;
