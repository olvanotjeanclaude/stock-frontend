import { Typography } from '@mui/material'
import React from 'react'

export default function Title({title,...props}) {
  return (
    <Typography variant='h4' my={1.5} {...props}>{title}</Typography>
  )
}
