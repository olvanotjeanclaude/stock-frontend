"use client";

import React from 'react';
import { Box, TextField, Button, Typography, Card, CardContent } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Grid from '@mui/material/Grid2'; // Updated import

const validationSchema = Yup.object({
    name: Yup.string().required('Le nom est requis'),
    email: Yup.string().email('Adresse e-mail invalide').required('L\'e-mail est requis'),
    phone: Yup.string()
        .matches(/^[\d\s+-]+$/, 'Numéro de téléphone invalide')
        .required('Le numéro de téléphone est requis'),
    address: Yup.string(),
    comments: Yup.string().max(500, 'Le commentaire ne peut pas dépasser 500 caractères'),
});

const initialValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
    comments: '',
};

export default function CustomerForm() {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            // Add form submission logic here
            console.log('Form submitted:', values);
            resetForm();
        },
    });

    return (
            <Card>
                <CardContent>
                    <form onSubmit={formik.handleSubmit} autoComplete='off'>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    fullWidth
                                    label="Nom"
                                    name="name"
                                    variant="outlined"
                                    {...formik.getFieldProps('name')}
                                    helperText={formik.touched.name ? formik.errors.name : ''}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    name="email"
                                    type="email"
                                    variant="outlined"
                                    {...formik.getFieldProps('email')}
                                    helperText={formik.touched.email ? formik.errors.email : ''}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    fullWidth
                                    label="Téléphone"
                                    name="phone"
                                    type="tel"
                                    variant="outlined"
                                    {...formik.getFieldProps('phone')}
                                    helperText={formik.touched.phone ? formik.errors.phone : ''}
                                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    fullWidth
                                    label="Adresse"
                                    name="address"
                                    variant="outlined"
                                    {...formik.getFieldProps('address')}
                                    helperText={formik.touched.address ? formik.errors.address : ''}
                                    error={formik.touched.address && Boolean(formik.errors.address)}
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    fullWidth
                                    label="Commentaires"
                                    name="comments"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    {...formik.getFieldProps('comments')}
                                    helperText={formik.touched.comments ? formik.errors.comments : ''}
                                    error={formik.touched.comments && Boolean(formik.errors.comments)}
                                />
                            </Grid>
                        </Grid>
                        <Box display="flex" justifyContent="flex-end" mt={2}>
                            <Button variant="contained" color="primary" type="submit">
                                Soumettre
                            </Button>
                        </Box>
                    </form>
                </CardContent>
            </Card>
    );
}
