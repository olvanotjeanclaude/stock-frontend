import React from 'react';
import { Card, CardContent, Typography, Grid2 as Grid, Divider } from '@mui/material';
import Subtitle from '../common/Subtitle';

const PriceDetails = ({ prices }) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <Subtitle title="Price Details" />
                <Grid container spacing={2}>
                    <Grid size={{ xs: 6 }}>
                        <Typography variant="subtitle1" color="textSecondary">
                            Prix de Vente
                        </Typography>
                        <Typography variant="h6" color="primary">
                            {`${prices.sellingPrice.currency.toUpperCase()} ${prices.sellingPrice.value}`}
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                        <Typography variant="subtitle1" color="textSecondary">
                            Prix de Revient
                        </Typography>
                        <Typography variant="h6">
                            {`${prices.costPrice.currency.toUpperCase()} ${prices.costPrice.value}`}
                        </Typography>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 2 }} />

                <Typography variant="body2" color="textSecondary">
                    *Prices are subject to change.
                </Typography>
            </CardContent>
        </Card>
    );
};

export default PriceDetails;
