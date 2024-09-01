import { Box, Container } from '@mui/material'
import React from 'react'

export default function Wrapper({ children, ...props }) {
    return (
        <Container   {...props}>
            {children}
        </Container>
    )
}
