import Title from '@/components/common/Title';
import Wrapper from '@/components/common/Wrapper';
import CustomerDetail from '@/components/customer/CustomerDetail';
import React from 'react';

const customer = {
    avatarSrc: 'https://via.placeholder.com/60?text=JD',
    firstName: 'John',
    surname: 'Doe',
    telephone: '+1234567890',
    email: 'john.doe@example.com',
    billingAddress: '123 Main St, Springfield, USA',
    socialMedia: [
        { platform: 'Facebook', link: 'https://facebook.com/johndoe' },
        { platform: 'Twitter', link: 'https://twitter.com/johndoe' },
    ],
    currency: 'USD',
    contactPersons: [
        { name: 'Jane Smith', role: 'Account Manager' },
        { name: 'Bob Johnson', role: 'Support Specialist' },
    ],
    comments: 'Preferred customer. Always on time with payments.',
};

const CustomerPage = ({ params }) => {
    return (
        <Wrapper sx={{ p: 0 }}>
            <Title  px={2} title={`${customer.firstName} ${customer.surname}  ${params.id}`} />
            {/* {JSON.stringify(params)} */}

            <CustomerDetail customer={customer} />
        </Wrapper>
    );
};

export default CustomerPage;
