import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import linebg from '../assets/images/Group 16.png'
import pic1 from '../assets/images/Rectangle 45.png'
import pic2 from '../assets/images/Rectangle 46.png'
import pic3 from '../assets/images/Rectangle 47.png'

function AboutMedPic() {
    return (
        <>
            <Box sx={{ mt: "150px"  }}>
                <Container>
                    <Box sx={{ display: "flex", justifyContent: 'center' }}>
                        <Box>
                            <Box sx={{ mb: 5 }}>
                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                    <Typography variant='h4' sx={{ color: "#1463A3", fontWeight: '600' }}>About Us</Typography>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                                    <Typography component={'img'} src={linebg} width={{ sm: '5%', xs: '10%' }}></Typography>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                                    <Typography sx={{ fontWeight: "600" }}>Home / </Typography>
                                    <Typography sx={{ fontWeight: "600", color: "#1063AA", ml: "5px" }}>About</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <Grid container xs={12} spacing={3}>
                                    <Grid item xs={12} sm={4}>
                                        <Typography component={'img'} src={pic1} width={'100%'}></Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={4} >
                                        <Typography component={'img'} src={pic2} width={'100%'}></Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={4} >
                                        <Typography component={'img'} src={pic3} width={'100%'}></Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default AboutMedPic
