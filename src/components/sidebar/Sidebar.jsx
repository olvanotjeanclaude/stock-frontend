import React from 'react';
import Link from 'next/link';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Box } from '@mui/material';
import menuItems from './menuItems';
import { sidebarWith } from '@/helpers/constant';

function Sidebar() {
  return (
    <Box sx={{
      display: { xs: "none", sm: "block" },
      width: sidebarWith,
      zIndex: 1,
      bgcolor: '#030B15',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0
    }}>
      <List>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <Link href={item.link} passHref>
              <ListItem
                button
                sx={{
                  color: '#fff',
                  textDecoration: 'none',
                  '&:hover': {
                    backgroundColor: '#1a2a37', // Optional: change background on hover
                  },
                }}
              >
                <ListItemIcon sx={{ color: '#fff', minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{ fontSize: '.9rem' }}
                />
              </ListItem>
            </Link>
            {item.subItems && (
              <List component="div" disablePadding>
                {item.subItems.map((subItem, subIndex) => (
                  <Link href={subItem.link} passHref key={subIndex} style={{ textDecoration: 'none' }}>
                    <ListItem
                      button
                      sx={{
                        color: '#b0bec5',
                        paddingLeft: '30px',
                        '&:hover': {
                          backgroundColor: '#1a2a37', // Optional: change background on hover
                        },
                      }}
                    >
                      <ListItemIcon sx={{ color: '#b0bec5', minWidth: 40 }}>
                        {subItem.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={subItem.text}
                        primaryTypographyProps={{ fontSize: '.9rem' }}
                      />
                    </ListItem>
                  </Link>
                ))}
              </List>
            )}
            <Divider sx={{ bgcolor: '#404854', margin: '15px 0' }} />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}

export default Sidebar;
