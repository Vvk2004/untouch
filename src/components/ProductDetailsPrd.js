import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import linebg from '../assets/images/Group 16.png'
import prdImg from '../assets/images/Rectangle 66.png'
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarHalfRoundedIcon from '@mui/icons-material/StarHalfRounded';
import bgbox1 from '../assets/images/Group 11.png'
import bgbox2 from '../assets/images/Group 12.png'

function ProductDetailsPrd() {
    return (
        <>
            <Box sx={{ mt: '150px', position: 'relative' }}>
                <Container>
                    <Box>
                        <Box>
                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <Typography variant='h4' sx={{ color: "#1463A3", fontWeight: '600', fontSize: { sm: '34px', xs: '30px' } }}>Product Details</Typography>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                                <Typography component={'img'} src={linebg} width={{ sm: '5%', xs: "10%" }}></Typography>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                                <Typography sx={{ fontWeight: "600" }}>Home / </Typography>
                                <Typography sx={{ fontWeight: "600", color: "#1063AA", ml: "5px" }}>Product Details</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ mt: 10 }}>
                            <Grid container xs={12}>
                                <Grid item md={6} xs={12}>
                                    <Typography component={'img'} src={prdImg} width={'100%'}></Typography>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Box sx={{ padding: "30px" }}>
                                        <Box>
                                            <Typography variant='h4' sx={{ fontWeight: '500', lineHeight: 1.5, fontSize: { lg: '34px', md: '30px', sm: '34px', xs: '24px'  } }}>Folly Balloon Catheter Sterile Two Way 10FR</Typography>
                                        </Box>
                                        <Box sx={{ mt: 1, display: 'flex' }}>
                                            <Box>
                                                <StarRoundedIcon sx={{ color: '#EA9D09', fontSize: { lg: '42px', sm: '38px', xs: '24px' } }} />
                                                <StarRoundedIcon sx={{ color: '#EA9D09', fontSize: { lg: '42px', sm: '38px', xs: '24px' } }} />
                                                <StarRoundedIcon sx={{ color: '#EA9D09', fontSize: { lg: '42px', sm: '38px', xs: '24px' } }} />
                                                <StarRoundedIcon sx={{ color: '#EA9D09', fontSize: { lg: '42px', sm: '38px', xs: '24px' } }} />
                                                <StarHalfRoundedIcon sx={{ color: '#EA9D09', fontSize: { lg: '42px', sm: '38px', xs: '24px' } }} />
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', ml: { sm: 2, xs: 1 } }}>
                                                <Typography sx={{ fontWeight: '600', fontSize: { sm: '16px', xs: '12px' } }}>7 Reviews</Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ display: 'flex', mt: 3 }}>
                                            <Box>
                                                <Typography sx={{ display: 'flex', fontWeight: '500', alignItems: 'center', fontSize: { sm: '16px', xs: '12px' } }}>
                                                    Rate Per pcs :
                                                    <Typography sx={{ fontWeight: '600', fontSize: { sm: '20px', xs: '14px' } , ml: 1 }}>
                                                        52
                                                    </Typography>
                                                </Typography>
                                            </Box>
                                            <Box sx={{ ml: 2 }}>
                                                <Typography sx={{ display: 'flex', fontWeight: '500', alignItems: 'center', fontSize: { sm: '16px', xs: '12px' } }}>
                                                    GST :
                                                    <Typography sx={{ fontWeight: '600', fontSize: { sm: '20px', xs: '14px' }, ml: 1 }}>
                                                        12%
                                                    </Typography>
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ mt: 3 }}>
                                            <Typography sx={{ display: 'flex', fontWeight: '500', alignItems: 'center', fontSize: { sm: '16px', xs: '12px' } }}>
                                                Total Amount :
                                                <Typography sx={{ fontWeight: '600', color: '#1463A3', fontSize: { lg: '20px', md: '18px', sm: '20px', xs: '14px'  } }}>
                                                    58.24
                                                </Typography>
                                            </Typography>
                                        </Box>
                                        <Box sx={{ mt: 3 }}>
                                            <Typography sx={{ color: '#8B8B8B', fontWeight: '500', fontSize: { lg: '16px', md: '12px',sm: '16px', xs: '12px' } }}>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
                <Typography component={'img'} src={bgbox1} sx={{ position: 'absolute', right: '0', top: '30px', width: '10%' }}></Typography>
                <Typography component={'img'} src={bgbox2} sx={{ position: 'absolute', left: '0', bottom: '-100px', width: '15%', zIndex: '-1', display: { md: 'block', xs: 'none'} }}></Typography>
            </Box>
        </>
    )
}

export default ProductDetailsPrd
