import { TextField, Typography, Paper, MenuItem } from '@mui/material';

export default function StockForm({ formik }) {
    return (
        <Paper style={{ padding: '16px', marginBottom: '16px' }}>
            <Typography variant="h6" gutterBottom>
                Informations de stock
            </Typography>
            
            {/* Vendor Select */}
            <TextField
                select
                name="stock.vendor"
                label="Fournisseur *"
                value={formik.values.stock.vendor}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.stock?.vendor && Boolean(formik.errors.stock?.vendor)}
                helperText={formik.touched.stock?.vendor && formik.errors.stock?.vendor}
                fullWidth
                margin="normal"
            >
                <MenuItem value="Vendor1">Fournisseur 1</MenuItem>
                <MenuItem value="Vendor2">Fournisseur 2</MenuItem>
                <MenuItem value="Vendor3">Fournisseur 3</MenuItem>
            </TextField>

            {/* Opening Stock */}
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
            />

            {/* Reorder Point */}
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
            />

            {/* Opening Stock Rate Per Unit */}
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
            />
        </Paper>
    );
}
