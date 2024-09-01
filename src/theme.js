import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#030B15',
    }
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    fontSize: 12, // Global font size (you can adjust this as needed)
    h1: {
      fontSize: '2rem', // Adjust header sizes as needed
    },
    h2: {
      fontSize: '1.75rem',
    },
    h3: {
      fontSize: '1.5rem',
    },
    h4: {
      fontSize: '1.25rem',
    },
    h5: {
      fontSize: '1rem',
    },
    h6: {
      fontSize: '0.875rem',
    },
    body1: {
      fontSize: '0.875rem', // Default font size for body text
    },
    body2: {
      fontSize: '0.75rem', // Smaller font size for secondary text
    },
    caption: {
      fontSize: '0.6875rem', // Font size for captions
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
        fullWidth: true,
        slotProps: { inputLabel: { shrink: true } }
      },
      styleOverrides: {
        input: {
          fontSize: '0.875rem', // Adjust font size within the input field
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',  // Ensure the input itself has a white background
        },
        input: {
          fontSize: '0.875rem', // Adjust font size within the input base
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        fullWidth: true,   // Set default width to full
        margin: 'normal',  // Set default margin to normal
        variant: 'outlined',  // Use outlined variant by default
        size: 'small',     // Set default size to small
      },
    },
    MuiSelect: {
      defaultProps: {
        fullWidth: true,   // Set default width to full
        margin: 'dense',  // Set default margin to normal
        variant: 'outlined',  // Use outlined variant by default
        size: 'small',     // Set default size to small
      },
      styleOverrides: {
        select: {
          fontSize: '0.875rem', // Adjust font size within the select component
        },
      },
    },
    MuiCard:{
      defaultProps:{
        variant: "outlined"
      }
    }
  },
});

export default theme;
