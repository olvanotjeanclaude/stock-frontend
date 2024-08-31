import { Typography } from '@mui/material'
import React from 'react'

export default function Title({title}) {
  return (
    <Typography variant='h4' my={1.5}>{title}</Typography>
  )
}
