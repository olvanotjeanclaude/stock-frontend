import React from 'react';
import CustomCard from '../common/CustomCard';
import Subtitle from '../common/Subtitle';
import Typography from '@mui/material/Typography';

const ContactPersons = ({ contactPersons }) => (
    <CustomCard>
        <Subtitle title="Contact Persons" />
        {contactPersons.map(({ name, role }) => (
            <Typography key={name} variant="body2" color="text.secondary">
                {name} ({role})
            </Typography>
        ))}
    </CustomCard>
);

export default ContactPersons;
