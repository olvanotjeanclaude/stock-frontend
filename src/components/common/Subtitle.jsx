import { Typography } from '@mui/material'
import React from 'react'

export default function Subtitle({ title ,...props}) {
    return (
        <Typography variant='h6' fontSize="1.06rem" mb={1} fontWeight={400} {...props}>
            {title}
        </Typography>
    )
}
