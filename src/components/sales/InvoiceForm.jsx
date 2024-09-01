"use client";

import React, { useState } from 'react';
import { TextField, Grid2 as Grid, Typography, Paper, MenuItem, Autocomplete, Box, Card, CardContent, Button, Snackbar, Alert } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ItemForm from './ItemForm';

const customers = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  // Add more customers here
];

const InvoiceForm = () => {
  const [feedback, setFeedback] = useState({ type: "", message: "", show: false });

  const formik = useFormik({
    initialValues: {
      customer: null,
      invoiceNumber: '',
      orderNumber: '',
      invoiceDate: '',
      description: '',
      dueDate: '',
      items: []
    },
    validationSchema: Yup.object({
      customer: Yup.object().required('Client est requis'),
      invoiceNumber: Yup.string().required('Numéro de facture est requis'),
      orderNumber: Yup.string().required('Numéro de commande est requis'),
      invoiceDate: Yup.date().required('Date de facture est requise'),
      description: Yup.string(),
      dueDate: Yup.date().required('Date d’échéance est requise'),
    }),
    onSubmit: (values) => {
      if (values.items.length == 0) {
        setFeedback(prev => ({
          ...prev,
          message: "Veuillez ajouter un article",
          show: true,
          type: "error"
        }));

        console.log("error")
        //  return false;
      }

      console.log('Form values:', values);
    },
  });

  const handleCloseSnackbar = () => {
    setFeedback(prev => ({ ...prev, show: false }))
  }


  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Nouvelle Facture
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <Card>
              <CardContent>
                <Typography>Client</Typography>
                <Autocomplete
                  options={customers}
                  getOptionLabel={(option) => option.name}
                  value={formik.values.customer}
                  onChange={(event, value) => formik.setFieldValue('customer', value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Client"
                      error={formik.touched.customer && Boolean(formik.errors.customer)}
                      helperText={formik.touched.customer && formik.errors.customer}
                    />
                  )}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Card>
              <CardContent>
                <ItemForm formik={formik} />
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Card>
              <CardContent>
                <Typography>Détails de l'article</Typography>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      name="invoiceNumber"
                      label="Numéro de Facture"
                      value={formik.values.invoiceNumber}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.invoiceNumber && Boolean(formik.errors.invoiceNumber)}
                      helperText={formik.touched.invoiceNumber && formik.errors.invoiceNumber}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      name="orderNumber"
                      label="Numéro de Commande"
                      value={formik.values.orderNumber}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.orderNumber && Boolean(formik.errors.orderNumber)}
                      helperText={formik.touched.orderNumber && formik.errors.orderNumber}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      name="invoiceDate"
                      label="Date de Facture"
                      type="date"
                      value={formik.values.invoiceDate}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.invoiceDate && Boolean(formik.errors.invoiceDate)}
                      helperText={formik.touched.invoiceDate && formik.errors.invoiceDate}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      name="dueDate"
                      label="Date d’échéance"
                      type="date"
                      value={formik.values.dueDate}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.dueDate && Boolean(formik.errors.dueDate)}
                      helperText={formik.touched.dueDate && formik.errors.dueDate}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      name="description"
                      label="Description"
                      multiline
                      rows={4}
                      value={formik.values.description}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.description && Boolean(formik.errors.description)}
                      helperText={formik.touched.description && formik.errors.description}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

        </Grid>


        <Button sx={{ float: "right", mt: 2 }} type='submit' variant='contained'>
          Enregistrer la Facture
        </Button>
      </form>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={feedback.show}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}>
        <Alert
          onClose={handleCloseSnackbar}
          severity={feedback.type}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {feedback.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default InvoiceForm;
