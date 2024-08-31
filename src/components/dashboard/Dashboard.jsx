"use client";

import { Avatar, Box, Grid2, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CustomCard from '../common/CustomCard';
import Subtitle from '../common/Subtitle';
import CheckIcon from '@mui/icons-material/Check';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { green, red } from '@mui/material/colors';
import ArticleSummaryList from './ArticleSummaryList';

export default function Dashboard() {

  const [cards, setCards] = useState([
    {
      image: "",
      value: 10,
      label: "Colis à livrer"
    },
    {
      image: "",
      value: 2,
      label: "Quantité à facturer"
    },
  ]);

  const articleSummary = [
    {
      label: 'Articles actifs',
      count: 10,
      avatarColor: green[500],
      icon: <CheckIcon />,
    },
    {
      label: 'Tous les articles',
      count: 10,
      avatarColor: green[100],
      icon: <PendingActionsIcon />,
    },
    {
      label: 'Articles en faible stock',
      count: 0,
      avatarColor: red[500],
      icon: <WarningAmberIcon />,
    },
  ];

  return (
    <Stack gap={3}>
      <Box>
        <Subtitle title="Activité de vente" />
        <Grid2 container spacing={1}>
          {
            cards.map((card, index) => (
              <Grid2 size={{ xs: 12 }} key={index}>
                <CustomCard>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Box display="flex" gap={2}>
                      <Avatar aria-label="recipe">
                        {card.label[0]}
                      </Avatar>
                      <Stack>
                        <Typography variant='h5'>{card.value}</Typography>
                        <Typography variant='body2'>{card.label}</Typography>
                      </Stack>
                    </Box>
                    <Box>
                      <KeyboardArrowRightIcon />
                    </Box>
                  </Box>
                </CustomCard>
              </Grid2>
            ))
          }
        </Grid2>
      </Box>

      <Box>
        <Subtitle title="Récapitulatif des stocks (En quantité)" />
        <Grid2 spacing={2} container>
          <Grid2 size={{ xs: 6 }}>
            <CustomCard>
              <Typography variant='body1'>En main</Typography>
              <Typography variant='h6'>100</Typography>
            </CustomCard>
          </Grid2>
          <Grid2 size={{ xs: 6 }}>
            <CustomCard>
              <Typography variant='body1'>A recevoir</Typography>
              <Typography variant='h6'>1000</Typography>
            </CustomCard>
          </Grid2>
        </Grid2>
      </Box>

      <Box>
        <Subtitle title="Détails du produit" />

        <ArticleSummaryList />

      </Box>
    </Stack>
  )
}
