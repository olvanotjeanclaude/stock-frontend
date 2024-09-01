import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, Paper, TextField, Typography, Autocomplete, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import ItemRow from './ItemRow';

const itemOptions = [
    { name: 'Item 1', quantity: 10, unitPrice: 100, avatar: 'https://via.placeholder.com/40' },
    { name: 'Item 2', quantity: 50, unitPrice: 200, avatar: 'https://via.placeholder.com/40' },
    { name: 'Item 3', quantity: 20, unitPrice: 300, avatar: 'https://via.placeholder.com/40' },
];

export default function ItemForm({ formik }) {
    const [open, setOpen] = useState(false);
    const [newItem, setNewItem] = useState({ name: '', quantity: '', unitPrice: '', amount: '' });
    const [items, setItems] = useState([]);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        formik.setFieldValue('items', items);
    }, [items])

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const validateItem = () => {
        const newErrors = {};
        if (!newItem.name) newErrors.name = "Nom de l'article est requis";
        if (!newItem.quantity) newErrors.quantity = 'Quantité est requise';
        if (!newItem.unitPrice) newErrors.unitPrice = 'Prix Unitaire est requis';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleAddItem = () => {
        if (validateItem()) {
            setItems([...items, newItem]);
            setNewItem({ name: '', quantity: '', unitPrice: '', amount: '' });
            handleClose();
        }
    };

    const handleRemoveItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    const calculateAmount = (quantity, unitPrice) => {
        return quantity && unitPrice ? (quantity * unitPrice).toFixed(2) : '';
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewItem((prev) => {
            const updatedItem = {
                ...prev,
                [name]: value,
                amount: calculateAmount(
                    name === 'quantity' ? value : prev.quantity,
                    name === 'unitPrice' ? value : prev.unitPrice
                ),
            };
            return updatedItem;
        });
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        if (errors[name]) {
            const newErrors = { ...errors };
            delete newErrors[name];
            setErrors(newErrors);
        }
    };

    const handleAutocompleteChange = (event, value) => {
        if (value) {
            setNewItem((prev) => ({
                ...prev,
                name: value.name,
                unitPrice: value.unitPrice,
                amount: calculateAmount(value.quantity, value.unitPrice)
            }));
        }
    };

    return (
        <>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography>Tableau des articles</Typography>

                <Button variant="outlined" size='small' onClick={handleOpen} startIcon={<AddIcon />}>
                    Ajouter
                </Button>
            </Box>

            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogTitle>Ajouter un article</DialogTitle>
                <DialogContent>
                    <Autocomplete
                        options={itemOptions}
                        getOptionLabel={(option) => option.name}
                        onChange={handleAutocompleteChange}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                name="name"
                                label="Nom de l'article"
                                value={newItem.name}
                                onBlur={handleBlur}
                                error={Boolean(errors.name)}
                                helperText={errors.name}
                            />
                        )}
                        renderOption={(props, option) => (
                            <Box {...props} sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexGrow: 1 }}>
                                    <Typography variant="body2">{option.name}</Typography>
                                    <Typography variant="body2" color="textSecondary">{option.quantity}</Typography>
                                </Box>
                            </Box>
                        )}
                    />
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="quantity"
                                label="Quantité"
                                type="number"
                                value={newItem.quantity}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={Boolean(errors.quantity)}
                                helperText={errors.quantity}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="unitPrice"
                                label="Prix Unitaire"
                                type="number"
                                value={newItem.unitPrice}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={Boolean(errors.unitPrice)}
                                helperText={errors.unitPrice}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1" color="textSecondary">
                                Montant
                            </Typography>
                            <Typography variant="h6" color="textPrimary">
                                {newItem.amount}
                            </Typography>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Annuler
                    </Button>
                    <Button onClick={handleAddItem} color="primary">
                        Ajouter
                    </Button>
                </DialogActions>
            </Dialog>
            <Box mt={2}>
                {items.map((item, index) => (
                    <ItemRow item={item} key={index} onDelete={() => handleRemoveItem(index)} />
                ))}
            </Box>

            {items.length > 0 && <Box display="flex" mt={2} justifyContent="space-between">
                <Typography variant='h5'>Total</Typography>
                <Typography variant='h5'>10 000 Ar</Typography>
            </Box>}
        </>
    );
}
