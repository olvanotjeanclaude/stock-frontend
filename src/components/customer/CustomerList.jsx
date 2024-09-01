import React from 'react';
import CustomerCard from './CustomerCard';
import Link from 'next/link';
import { Grid2 as Grid } from '@mui/material';

const CustomerList = () => {
  const mockCustomers = [
    {
      id: 1,
      avatarSrc: 'https://via.placeholder.com/60?text=A',
      firstName: 'John',
      surname: 'Doe',
      email: 'john.doe@example.com',
      phone: '+1234567890',
      address: '123 Main St, Springfield',
    },
    {
      id: 2,
      avatarSrc: 'https://via.placeholder.com/60?text=B',
      firstName: 'Olvanot Jean Claude',
      surname: 'Rakotonirina',
      email: 'olvanotjcs@gmail.com',
      phone: '+0987654321',
      address: 'LOT VC 34 BIS AMBANIDIA FALIARIVO ANTANANARIVO II, AMBANIDIA',
    },
    // Add more customers as needed
  ];

  return (
    <Grid container spacing={1}>
      {mockCustomers.map((customer, index) => (
        <Grid size={{ xs: 12, md: 6 }}>
          <Link key={index} href={`/customers/${customer.id}`} style={{ textDecoration: "none" }}>
            <CustomerCard
              avatarSrc={customer.avatarSrc}
              firstName={customer.firstName}
              surname={customer.surname}
              email={customer.email}
              phone={customer.phone}
              address={customer.address}
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default CustomerList;
