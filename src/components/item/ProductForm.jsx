"use client";

import React from 'react';
import { Button, Grid2 as Grid } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PriceForm from './PriceForm';
import StockForm from './StockForm';
import BasicInfoForm from './BasicInfoForm';
import CategoryForm from './CategoryForm';

const ProductForm = () => {
  const formik = useFormik({
    initialValues: {
      basic: {
        name: '',
        sku: '',
        unit: '',
        isReturnable: false,
        description: '',
      },
      price: {
        sellingPrice: {
          currency: 'usd',
          value: '',
        },
        costPrice: {
          currency: 'usd',
          value: '',
        },
      },
      stock: {
        openingStock: '',
        reorderPoint: '',
        openingStockRatePerUnit: '',
        vendor: '', // Added vendor field
      },
      category: ""
    },
    validationSchema: Yup.object({
      basic: Yup.object({
        name: Yup.string().required('Nom est requis'),
        sku: Yup.string(),
        unit: Yup.string().required('Unité est requise'),
        description: Yup.string(),
      }),
      price: Yup.object({
        sellingPrice: Yup.object({
          currency: Yup.string().required('Devise du prix de vente est requise'),
          value: Yup.number()
            .required('Prix de vente est requis')
            .positive('Le prix doit être un nombre positif')
            .typeError('Le prix doit être un nombre'),
        }),
        costPrice: Yup.object({
          currency: Yup.string().required('Devise du prix de revient est requise'),
          value: Yup.number()
            .required('Prix de revient est requis')
            .positive('Le prix doit être un nombre positif')
            .typeError('Le prix doit être un nombre'),
        }),
      }),
      stock: Yup.object({
        openingStock: Yup.number()
          .required('Quantité de stock d’ouverture est requise')
          .positive('Le stock doit être un nombre positif')
          .typeError('Le stock doit être un nombre'),
        reorderPoint: Yup.number(),
        openingStockRatePerUnit: Yup.number(),
      }),
      category: Yup.string().required('Catégorie est requise'),
    }),
    onSubmit: (values) => {
      console.log('Form values:', values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} autoComplete='off'>
      <Grid container spacing={1}>
        <Grid size={{ xs: 12, md: 7 }}>
          <BasicInfoForm formik={formik} />
        </Grid>
        <Grid size={{ xs: 12, md: 5 }}>
          <CategoryForm formik={formik} />
          <PriceForm formik={formik} />
        </Grid>
      </Grid>
      <StockForm formik={formik} />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ marginTop: '16px', float: "right" }}
      >
        Enregistrer
      </Button>
    </form>
  );
};

export default ProductForm;
