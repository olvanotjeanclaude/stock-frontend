import { TextField, Typography, Paper } from '@mui/material';

export default function StockForm({formik}) {
    return (
        <Paper style={{ padding: '16px', marginBottom: '16px' }}>
            <Typography variant="h6" gutterBottom>
                Informations de stock
            </Typography>
            <TextField
                name="stock.openingStock"
                label="Quantité de stock d’ouverture *"
                type="number"
                value={formik.values.stock.openingStock}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.stock?.openingStock && Boolean(formik.errors.stock?.openingStock)}
                helperText={formik.touched.stock?.openingStock && formik.errors.stock?.openingStock}
                fullWidth
                margin="normal"
                variant="outlined"
                size="small"
                InputLabelProps={{ shrink: true }}
            />
            <TextField
                name="stock.reorderPoint"
                label="Point de commande"
                type="number"
                value={formik.values.stock.reorderPoint}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.stock?.reorderPoint && Boolean(formik.errors.stock?.reorderPoint)}
                helperText={formik.touched.stock?.reorderPoint && formik.errors.stock?.reorderPoint}
                fullWidth
                margin="normal"
                variant="outlined"
                size="small"
                InputLabelProps={{ shrink: true }}
            />
            <TextField
                name="stock.openingStockRatePerUnit"
                label="Taux de stock d’ouverture par unité"
                type="number"
                value={formik.values.stock.openingStockRatePerUnit}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.stock?.openingStockRatePerUnit && Boolean(formik.errors.stock?.openingStockRatePerUnit)}
                helperText={formik.touched.stock?.openingStockRatePerUnit && formik.errors.stock?.openingStockRatePerUnit}
                fullWidth
                margin="normal"
                variant="outlined"
                size="small"
                InputLabelProps={{ shrink: true }}
            />
        </Paper>
    )
}
