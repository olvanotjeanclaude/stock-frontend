"use client";

import React from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, Typography, Paper, Grid2 as Grid } from '@mui/material';

const units = [
  { value: 'piece', label: 'Pièce' },
  { value: 'box', label: 'Boîte' },
  { value: 'kg', label: 'Kilogramme' },
  { value: 'liter', label: 'Litre' },
];


export default function BasicInfoForm({ formik }) {
  return (
    <Paper style={{ padding: '16px', marginBottom: '16px' }}>
      <Typography variant="h6" gutterBottom>
        Informations de base
      </Typography>
      <Grid container spacing={1}>
        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <TextField
            name="basic.name"
            label="Nom de l'article *"
            value={formik.values.basic.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.basic?.name && Boolean(formik.errors.basic?.name)}
            helperText={formik.touched.basic?.name && formik.errors.basic?.name}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 5 }}>
          <TextField
            name="basic.sku"
            label="SKU (Unité de gestion des stocks)"
            value={formik.values.basic.sku}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.basic?.sku && Boolean(formik.errors.basic?.sku)}
            helperText={formik.touched.basic?.sku && formik.errors.basic?.sku}
          />
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <FormControl>
            <InputLabel id="unit-label">Unité *</InputLabel>
            <Select
              labelId="unit-label"
              name="basic.unit"
              value={formik.values.basic.unit}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Unité"
              error={formik.touched.basic?.unit && Boolean(formik.errors.basic?.unit)}
            >
              {units.map((unit) => (
                <MenuItem key={unit.value} value={unit.value}>
                  {unit.label}
                </MenuItem>
              ))}
            </Select>
            {formik.touched.basic?.unit && formik.errors.basic?.unit && (
              <div style={{ color: 'red', marginTop: '4px' }}>
                {formik.errors.basic?.unit}
              </div>
            )}
          </FormControl>
        </Grid>
      </Grid>

      <FormControlLabel
        control={
          <Checkbox
            name="basic.isReturnable"
            checked={formik.values.basic.isReturnable}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            color="primary"
          />
        }
        label="Retournable"
        style={{ marginBottom: '16px' }}
      />
      <TextField
        name="basic.description"
        label="Description"
        multiline
        rows={4}
        value={formik.values.basic.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.basic?.description && Boolean(formik.errors.basic?.description)}
        helperText={formik.touched.basic?.description && formik.errors.basic?.description}
      />
    </Paper>
  )
}
