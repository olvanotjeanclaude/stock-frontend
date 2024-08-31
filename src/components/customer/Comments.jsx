import React from 'react';
import CustomCard from '../common/CustomCard';
import Subtitle from '../common/Subtitle';
import Typography from '@mui/material/Typography';

const Comments = ({ comments }) => (
    <CustomCard>
        <Subtitle title="Comments" />
        <Typography variant="body2" color="text.secondary">{comments}</Typography>
    </CustomCard>
);

export default Comments;
