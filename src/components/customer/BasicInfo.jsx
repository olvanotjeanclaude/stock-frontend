import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CustomCard from '../common/CustomCard';

const BasicInfo = ({ avatarSrc, firstName, surname, telephone, email }) => (
    <CustomCard>
        <Box display="flex" alignItems="center">
            <Avatar src={avatarSrc} alt={`${firstName} ${surname}`} sx={{ marginRight: 2 }} />
            <Box>
                <Typography variant="h6">{`${firstName} ${surname}`}</Typography>
                <Typography variant="body2" color="text.secondary">{telephone}</Typography>
                <Typography variant="body2" color="text.secondary">{email}</Typography>
            </Box>
        </Box>
    </CustomCard>
);

export default BasicInfo;
