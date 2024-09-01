import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PaymentIcon from '@mui/icons-material/Payment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CategoryIcon from '@mui/icons-material/Category';
import BarChartIcon from '@mui/icons-material/BarChart';
import BudgetIcon from '@mui/icons-material/AccountBalance';
import PackageIcon from '@mui/icons-material/LocalShipping';

const menuItems = [
    {
        text: 'Accueil',
        icon: <DashboardIcon />,
        link: '/dashboard'
    },
    {
        text: 'Inventory',
        icon: <InventoryIcon />,
        link: '#',
        subItems: [
            { text: 'Articles', icon: <CategoryIcon />, link: '/inventory/items' },
            // { text: 'Inventory Adjustments', icon: <BarChartIcon />, link: '/inventory/adjustments' }
        ]
    },
    {
        text: 'Sales',
        icon: <ShoppingCartIcon />,
        link: '#',
        subItems: [
            { text: 'Clients', icon: <PeopleIcon />, link: '/customers' },
            { text: 'Ventes', icon: <ReceiptIcon />, link: '/sales' },
            { text: 'Colis', icon: <PackageIcon />, link: '/packages' },
            // { text: 'Packages', icon: <AttachMoneyIcon />, link: '/sales/packages' },
            // { text: 'Sales Receipts', icon: <PaymentIcon />, link: '/sales/receipts' },
            // { text: 'Payments Received', icon: <PaymentIcon />, link: '/sales/payments' }
        ]
    },
    // {
    //     text: 'Expenses',
    //     icon: <BudgetIcon />,
    //     link: '/expenses',
    //     subItems: [
    //         { text: 'Office Supplies', icon: <AttachMoneyIcon />, link: '/expenses/office-supplies' },
    //         { text: 'Utilities', icon: <AttachMoneyIcon />, link: '/expenses/utilities' },
    //         { text: 'Rent', icon: <AttachMoneyIcon />, link: '/expenses/rent' },
    //         { text: 'Salaries', icon: <AttachMoneyIcon />, link: '/expenses/salaries' },
    //         { text: 'Travel', icon: <AttachMoneyIcon />, link: '/expenses/travel' },
    //         { text: 'Miscellaneous', icon: <AttachMoneyIcon />, link: '/expenses/miscellaneous' }
    //     ]
    // }
];

export default menuItems;
