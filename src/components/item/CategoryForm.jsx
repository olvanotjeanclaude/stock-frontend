import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Typography, Paper, Box, FormHelperText } from '@mui/material';

const categories = [
  { value: 'electronics', label: 'Electronics' },
  { value: 'furniture', label: 'Furniture' },
  { value: 'clothing', label: 'Clothing' },
  // Add more categories as needed
];

export default function CategoryForm({ formik }) {
  return (
    <Paper style={{ padding: '16px', marginBottom: '16px' }}>
      <Typography variant="h6" gutterBottom>
        Catégorie de l'article
      </Typography>
      <FormControl variant="outlined" size="small" fullWidth>
        <InputLabel id="category-label">Catégorie *</InputLabel>
        <Select
          labelId="category-label"
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Catégorie"
          error={formik.touched.category && Boolean(formik.errors.category)}
        >
          {categories.map((category) => (
            <MenuItem key={category.value} value={category.value}>
              {category.label}
            </MenuItem>
          ))}
        </Select>
        {formik.touched.category && formik.errors.category && (
          <FormHelperText error>
            {formik.errors.category}
          </FormHelperText>
        )}
      </FormControl>
    </Paper>
  );
}
