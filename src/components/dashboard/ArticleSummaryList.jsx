import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ChecklistIcon from '@mui/icons-material/Checklist';
import { blue, green, red } from '@mui/material/colors';
import { Card, CardContent } from '@mui/material';

const items = [
  {
    label: 'Articles actifs',
    count: 10,
    avatarColor: green[500],
    icon: <ChecklistIcon />,
  },
  {
    label: 'Tous les articles',
    count: 34,
    avatarColor: blue[500],
    icon: <PendingActionsIcon />,
  },
  {
    label: 'Articles en faible stock',
    count: 0,
    avatarColor: red[500],
    icon: <WarningAmberIcon />,
  },
];

const ArticleSummaryList = () => {
  return (
    <Card >
      <CardContent sx={{ px: 0 }}>
        <List>
          {items.map((item, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <KeyboardArrowRightIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar
                  sx={{
                    background: item.avatarColor,
                    width: 40,  // Reduced size
                    height: 40, // Reduced size
                  }}
                >
                  {item.icon}
                </Avatar>
              </ListItemAvatar>
              <ListItemText>
                <Box display="flex" justifyContent="space-between">
                  <Typography>{item.label}</Typography>
                  <Typography>{item.count}</Typography>
                </Box>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ArticleSummaryList;
