import { green, orange, red, yellow } from '@mui/material/colors';

export function a11yProps(index) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}

export function getStatusInvoiceColor(status){
    switch (status) {
      case 'Paid':
        return green[500];
      case 'Pending':
        return orange[500];
      case 'Overdue':
        return red[500];
      case 'Partial':
        return yellow[700];
      default:
        return 'inherit';
    }
  };
