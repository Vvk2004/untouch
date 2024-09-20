import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import linebg from '../assets/images/Group 16.png'
import yearimg1 from '../assets/images/Group 452.png'
import yearimg2 from '../assets/images/Group 455.png'
import yearimg3 from '../assets/images/Group 453.png'
import yearimg4 from '../assets/images/Group 456.png'
import yearimg5 from '../assets/images/Group 454.png'
import yearimg6 from '../assets/images/Group 457.png'
import yearimg7 from '../assets/images/Group 458.png'
import yearimg8 from '../assets/images/Group 459.png'
import yearimg9 from '../assets/images/Group 460.png'
import yearimg10 from '../assets/images/Group 461.png'
import yearimg11 from '../assets/images/Group 462.png'
import yearimg12 from '../assets/images/Group 463.png'
import yearimg13 from '../assets/images/Group 464.png'
import yearimg14 from '../assets/images/Group 465.png'
import yearimg15 from '../assets/images/Group 466.png'
import yearimg16 from '../assets/images/Group 467.png'

function AboutHistory() {
    return (
        <>
            <Box>
                <Container>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Box>
                            <Typography variant='h4' sx={{ color: "#1463A3", fontWeight: "600", display: "flex", justifyContent: "center", fontSize: { lg: "32px", md: "28px", sm: '24px', xs: "22px" } }}>Company’s history</Typography>
                            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                                <Typography component={'img'} src={linebg}></Typography>
                            </Box>
                            <Box sx={{ width: '100%', display: "flex", justifyContent: "center", mt: 2 }}>
                                <Typography sx={{ display: "flex", fontSize: { lg: "20px", md: "18px", sm: '16px', xs: "10px" }, justifyContent: "center", textAlign: "center", fontWeight: "500" }}>HMD Collaborated with M/s. Star Syringe Ltd., <br />  (UK based company founded by Mr. Marc Koska (Inventor).</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Grid container spacing={2} sx={{ mt: { lg: 20, md: 15, sm: 10, xs: 5 } }}>
                        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography component={'img'} src={yearimg1} sx={{ width: "50%" }}/>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography component={'img'} src={yearimg2} sx={{ width: "50%" }}/>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography component={'img'} src={yearimg3} sx={{ width: "50%" }}/>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography component={'img'} src={yearimg4} sx={{ width: "50%" }}/>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography component={'img'} src={yearimg5} sx={{ width: "50%" }}/>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography component={'img'} src={yearimg6} sx={{ width: "50%" }}/>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography component={'img'} src={yearimg7} sx={{ width: "50%" }}/>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography component={'img'} src={yearimg8} sx={{ width: "50%" }}/>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography component={'img'} src={yearimg9} sx={{ width: "50%" }}/>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography component={'img'} src={yearimg10} sx={{ width: "50%" }}/>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography component={'img'} src={yearimg11} sx={{ width: "50%" }}/>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography component={'img'} src={yearimg12} sx={{ width: "50%" }}/>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography component={'img'} src={yearimg13} sx={{ width: "50%" }}/>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography component={'img'} src={yearimg14} sx={{ width: "50%" }}/>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography component={'img'} src={yearimg15} sx={{ width: "50%" }}/>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography component={'img'} src={yearimg16} sx={{ width: "50%" }}/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default AboutHistory
