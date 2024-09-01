"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PackageIcon from '@mui/icons-material/LocalShipping';
import ItemIcon from '@mui/icons-material/Assignment';
import PeopleIcon from '@mui/icons-material/People'; // Import the People icon
import { useRouter, usePathname } from 'next/navigation';

const menuItems = [
  { label: 'Accueil', path: '/dashboard', icon: <DashboardIcon /> }, // Dashboard
  { label: 'Articles', path: '/inventory/items', icon: <ItemIcon /> }, // Items
  { label: 'Ventes', path: '/sales', icon: <ShoppingCartIcon /> }, // Sales
  { label: 'Colis', path: '/packages', icon: <PackageIcon /> }, // Packages (same in French)
  { label: 'Clients', path: '/customers', icon: <PeopleIcon /> }, // Customers
];

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path
  const [value, setValue] = React.useState(pathname);

  const handleNavigation = (path) => {
    setValue(path); // Update the current route value
    router.push(path);
  };

  return (
    <Box>
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          width: '100%',
          backgroundColor: '#333', // Dark background color
          color: '#fff', 
          display: 'flex',
          justifyContent: 'center',
          zIndex:1
        }}
        elevation={3}
      >
        <BottomNavigation
          value={value}
          showLabels
          sx={{
            width: '100%',
            maxWidth: 600,
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: 'inherit', // Inherit the background color from Paper
            color: 'inherit', // Inherit text color from Paper
          }}
        >
          {menuItems.map((item) => (
            <BottomNavigationAction
              key={item.label}
              label={item.label}
              icon={item.icon}
              onClick={() => handleNavigation(item.path)} 
              sx={{
                minWidth: 'auto',
                color: value === item.path ? '#4caf50' : 'inherit', // Highlight active item
                fontWeight: value === item.path ? 'bold' : 'normal', // Optionally, make the active item bold
              }}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
