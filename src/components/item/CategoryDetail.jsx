import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

export default function CategoryDetail() {
    return (
        <Card>
            <CardContent>
                <Typography variant="subtitle1" color="textSecondary">
                    Catégorie
                </Typography>
                <Typography variant="h6" color="textPrimary">
                    Téléphone
                </Typography>
            </CardContent>
        </Card>
    )
}
