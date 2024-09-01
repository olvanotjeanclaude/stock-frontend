import React from 'react';
import { Card, CardContent, Typography, Grid2 as Grid, Box, Alert } from '@mui/material';
import Subtitle from '../common/Subtitle';
import { blue } from '@mui/material/colors';

const StockDetails = ({ stock, vendor }) => {
    return (
        <Card>
            <CardContent>
                <Subtitle title="Informations sur le Stock" />
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12 }}>
                        <Alert severity='info'>
                            <Typography variant="subtitle1">
                                En Stock
                            </Typography>
                            <Typography variant="h5">
                                {stock.quantityAvailable}
                            </Typography>
                        </Alert>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Typography variant="subtitle1" color="textSecondary">
                            Stock d'Ouverture
                        </Typography>
                        <Typography variant="h6" color="textPrimary">
                            {stock.openingStock}
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Typography variant="subtitle1" color="textSecondary">
                            Point de Réapprovisionnement
                        </Typography>
                        <Typography variant="h6" color="textPrimary">
                            {stock.reorderPoint}
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Typography variant="subtitle1" color="textSecondary">
                            Fournisseur
                        </Typography>
                        <Typography variant="h6" color="textPrimary">
                            {vendor.name}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default StockDetails;
