import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import twodline from '../assets/images/Group 15.png'
import years from '../assets/images/Group 448.png'
import boxesbg1 from '../assets/images/Group 18.png'

function AboutExperience() {
    return (
        <>
            <Box sx={{ pt: { sm: "100px", xs: "50px" }, position: "relative" }}>
                <Container>
                    <Grid xs={12} container spacing={10} sx={{ pb: { lg: "160px", md: "120px", sm: '100px', xs: '50px' } }}>
                        <Grid item md={6} xs={12}>
                            <Typography variant='h3' sx={{ color: "#1463A3", fontWeight: "600", fontSize: { lg: "40px", md: "35px", sm: '30px', xs: "25px" } }}>Experience</Typography>
                            <Typography sx={{ fontWeight: "600", mt: "20px", fontSize: { lg: "16px", md: "14px", sm: "12px", xs: "10px" }, mb: "10px" }}>Founded in the year 1957, Hindustan Syringes & Medical Devices Ltd. is a high volume capacity manufacturer of cutting-edge medical devices for a highly demanding global market. HMD has set a benchmark when it comes to manufacturing a plethora of medical disposables, thus aiding medical experts to save and sustain human lives across the globe. All products manufactured at HMD plants are marketed through a highly responsive national distribution network, comprising of more than 4500 authorized dealers, ensuring ready availability of every product from their inventory, even in the most secluded of the areas, backed up by value-adding customer support.</Typography>
                        </Grid>
                        <Grid item md={6} xs={12} sx={{ position: "absolute", right: "0", top: 'o', display: { md: "block", xs: "none" } }}>
                            <Typography component={'img'} src={years} width={'80%'}></Typography>
                        </Grid>
                    </Grid>
                </Container>
                <Typography component={'img'} src={twodline} sx={{ position: "absolute", top: { md: "60px", sm: '70px', xs: '30px' }, left: { lg: "30px", xs: "0" }, width: '16%' }}></Typography>
                <Typography component={'img'} src={boxesbg1} sx={{ position: "absolute", display: { sm: "block", xs: 'none' }, bottom: '-100px', right: '0', width: '15%' }}></Typography>
            </Box>
        </>
    )
}

export default AboutExperience
