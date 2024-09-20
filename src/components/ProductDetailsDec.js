import { Box, Container, Typography } from '@mui/material'
import React from 'react'

function ProductDetailsDec() {
  return (
    <>
        <Box sx={{ mt : { md: 20, sm : 10, xs: 5 } }}>
            <Container>
                <Box>
                    <Box sx={{ display: 'flex', borderBottom: '2px solid #969696'}}>
                        <Typography variant='h6' sx={{ fontSize: { sm: '18px', xs: '14px' }, fontWeight: '600', color: "#1463A3", borderBottom: { sm: '7px solid #1463A3', xs: '5px solid #1463A3'}, pb: 5 }}>
                            Description
                        </Typography>
                        <Typography variant='h6' sx={{ fontSize: { sm: '18px', xs: '14px' }, fontWeight: '500', color: '#8B8B8B', ml: 10, pb: 5 }}>
                            Review
                        </Typography>
                    </Box>
                    <Box sx={{ mt: 5 }}>
                        <Typography variant='h4' sx={{ fontWeight: '500', fontSize: { sm: '34px', xs: '30px' } }}>Where does it come from?</Typography>
                        <Typography sx={{ fontWeight: '500', color: '#8B8B8B', mt: 5, fontSize: { sm: "16px", xs: '12px' } }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</Typography>
                        <Typography sx={{ fontWeight: '500', color: '#8B8B8B', mt: 5, fontSize: { sm: "16px", xs: '12px' } }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</Typography>
                        <Typography sx={{ fontWeight: '500', color: '#8B8B8B', mt: 5, fontSize: { sm: "16px", xs: '12px' } }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    </>
  )
}

export default ProductDetailsDec
