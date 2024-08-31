"use client";

import React from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, Typography, Paper, Box, FormHelperText } from '@mui/material';
import { red } from '@mui/material/colors';

const currencies = [
    { value: 'usd', label: 'USD ($)' },
    { value: 'eur', label: 'EUR (€)' },
    { value: 'gbp', label: 'GBP (£)' },
    { value: 'jpy', label: 'JPY (¥)' },
];

export default function PriceForm({ formik }) {
    return (
        <Paper style={{ padding: '16px', marginBottom: '16px' }}>
            <Typography variant="h6" gutterBottom>
                Informations de prix
            </Typography>

            {/* Selling Price */}
            <Box marginBottom={2}>
                <Box display="flex" alignItems="center" gap={1}>
                    <TextField
                        name="price.sellingPrice.value"
                        label="Prix de vente *"
                        type="number"
                        value={formik.values.price.sellingPrice.value}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.price?.sellingPrice?.value && Boolean(formik.errors.price?.sellingPrice?.value)}
                        variant="outlined"
                        size="small"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                    />
                    <FormControl variant="outlined" size="small" style={{ maxWidth: '100px' }}>
                        <InputLabel id="selling-price-currency-label">Devise *</InputLabel>
                        <Select
                            labelId="selling-price-currency-label"
                            name="price.sellingPrice.currency"
                            value={formik.values.price.sellingPrice.currency}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            label="Devise"
                            error={formik.touched.price?.sellingPrice?.currency && Boolean(formik.errors.price?.sellingPrice?.currency)}
                        >
                            {currencies.map((currency) => (
                                <MenuItem key={currency.value} value={currency.value}>
                                    {currency.label}
                                </MenuItem>
                            ))}
                        </Select>
                        {formik.touched.price?.sellingPrice?.currency && formik.errors.price?.sellingPrice?.currency && (
                            <FormHelperText   error>
                                {formik.errors.price?.sellingPrice?.currency}
                            </FormHelperText>
                        )}
                    </FormControl>
                </Box>
                {formik.touched.price?.sellingPrice?.value && formik.errors.price?.sellingPrice?.value && (
                      <small style={{color: red[500]}}>
                          {formik.errors.price?.sellingPrice?.value}
                      </small>
                )}
            </Box>

            {/* Cost Price */}
            <Box>
                <Box display="flex" alignItems="center" gap={1}>
                    <TextField
                        name="price.costPrice.value"
                        label="Prix de revient *"
                        type="number"
                        value={formik.values.price.costPrice.value}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.price?.costPrice?.value && Boolean(formik.errors.price?.costPrice?.value)}
                        variant="outlined"
                        size="small"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                    />
                    <FormControl variant="outlined" size="small" style={{ maxWidth: '100px' }}>
                        <InputLabel id="cost-price-currency-label">Devise *</InputLabel>
                        <Select
                            labelId="cost-price-currency-label"
                            name="price.costPrice.currency"
                            value={formik.values.price.costPrice.currency}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            label="Devise"
                            error={formik.touched.price?.costPrice?.currency && Boolean(formik.errors.price?.costPrice?.currency)}
                        >
                            {currencies.map((currency) => (
                                <MenuItem key={currency.value} value={currency.value}>
                                    {currency.label}
                                </MenuItem>
                            ))}
                        </Select>
                        {formik.touched.price?.costPrice?.currency && formik.errors.price?.costPrice?.currency && (
                            <FormHelperText  error>
                                {formik.errors.price?.costPrice?.currency}
                            </FormHelperText>
                        )}
                    </FormControl>
                </Box>
                {formik.touched.price?.costPrice?.value && formik.errors.price?.costPrice?.value && (
                    <small style={{color: red[500]}} marginTop={1}>
                        {formik.errors.price?.costPrice?.value}
                    </small>
                )}
            </Box>
        </Paper>
    );
}
