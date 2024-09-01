import React from 'react'
import { Card, CardContent, Divider, Typography } from '@mui/material';
import DetailRow from '../common/DetailRow';
import Subtitle from '../common/Subtitle';

const BasicInfoDetail = ({ product }) => (
    <Card>
        <CardContent>
            <Subtitle title="Informations de base" />
            <DetailRow label="Nom" value={product.basic.name} />
            <DetailRow label="SKU" value={product.basic.sku} />
            <DetailRow label="Unité" value={product.basic.unit} />
            {/* <DetailRow label="Description" value={product.basic.description} /> */}
            <DetailRow label="Retournable" value={product.basic.isReturnable ? 'Oui' : 'Non'} />
            <Divider sx={{my:2}} />
            <Typography>{product.basic.description}</Typography>
        </CardContent>
    </Card>
);

export default BasicInfoDetail;