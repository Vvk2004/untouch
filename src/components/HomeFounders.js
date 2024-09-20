import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import linepic from '../assets/images/Group 16.png'
import founder1 from '../assets/images/founder1.png'
import founder2 from '../assets/images/founder2.png'
import founder3 from '../assets/images/founder3.png'
import sidebgbox from '../assets/images/Group 434.png'

function HomeFounders() {
    return (
        <>
            <Box sx={{ mt: { sm: "100px", xs: '60px' }, mb: '100px', position: "relative" }}>
                <Container>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Typography variant='h3' sx={{ color: "#1463A3", fontWeight: "500", fontSize: { sm: '44px', xs: '40px' } }}>
                            Founders
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
                        <Typography component={'img'} src={linepic} width={{ sm: '8%', xs: "15%" }}></Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Grid container xs={12} spacing={5}>
                            <Grid item sm={4} xs={12}>
                                <Box>
                                    <Typography component={'img'} src={founder1} width={'100%'}></Typography>
                                    <Box sx={{ mt: 2 }}>
                                        <Typography variant='h4' sx={{ fontWeight: "600", fontSize: { md: "30px", sm: "20px", xs: "28px" }, display: "flex", justifyContent: "center" }}>Lorem Ipsum</Typography>
                                        <Typography variant='h6' sx={{ fontWeight: "600", fontSize: { md: "20px", sm: '16px', xs: '18px' }, display: "flex", justifyContent: "center", mt: 1 }}>Lorem Ipsum</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <Box>
                                    <Typography component={'img'} src={founder2} width={'100%'}></Typography>
                                    <Box sx={{ mt: 2 }}>
                                        <Typography variant='h4' sx={{ fontWeight: "600", fontSize: { md: "30px", sm: "20px", xs: "28px" }, display: "flex", justifyContent: "center" }}>Lorem Ipsum</Typography>
                                        <Typography variant='h6' sx={{ fontWeight: "600", fontSize: { md: "20px", sm: '16px', xs: '18px' }, display: "flex", justifyContent: "center", mt: 1 }}>Lorem Ipsum</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <Box>
                                    <Typography component={'img'} src={founder3} width={'100%'}></Typography>
                                    <Box sx={{ mt: 2 }}>
                                        <Typography variant='h4' sx={{ fontWeight: "600", fontSize: { md: "30px", sm: "20px", xs: "28px" }, display: "flex", justifyContent: "center" }}>Lorem Ipsum</Typography>
                                        <Typography variant='h6' sx={{ fontWeight: "600", fontSize: { md: "20px", sm: '16px', xs: '18px' }, display: "flex", justifyContent: "center", mt: 1 }}>Lorem Ipsum</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
                <Typography component={'img'} src={sidebgbox} width={"10%"} sx={{ position: "absolute", top: "-50px", left: "0" }}></Typography>
            </Box>
        </>
    )
}

export default HomeFounders
