import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import docimg from '../assets/images/Group 445.png'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import boxbg from '../assets/images/Group 12.png'

function AboutDec() {
    return (
        <>
            <Box sx={{ my: { sm: "100px", xs: "50px" }, position: "relative" }}>
                <Container>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid container xs={12} sx={{ backgroundColor: "#fff", p: 3, boxShadow: '2px 2px 10px #e1e1e1', borderRadius: '20px' }}>
                            <Grid item sm={3} xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                                <Typography component={'img'} src={docimg} sx={{ width: { sm: "100%", xs: "50%" }, height: "auto", mb: { sm: '0', xs: "10px" } }}></Typography>
                            </Grid>
                            <Grid item sm={9} xs={12} sx={{ display: "flex", alignItems: "center", pl: { md: 10, sm: 5, xs: 1} }}>
                                <Box sx={{ position: 'relative', display: "flex", alignItems: "center" }}>
                                    <FormatQuoteIcon sx={{ position: "absolute", top: "-45px", left: "-40px", color: "#78ADD9", fontSize: { md: '60px', sm: "50px", xs: "40px" }, transform: "rotate(180deg)" }} />
                                    <Typography sx={{ color: "#667989", fontSize: { lg: "16px", md: "14px", sm: '12px', xs: "10px" } }}>Founded in the year 1957, Hindustan Syringes & Medical Devices Ltd. is a high volume capacity manufacturer of cutting-edge medical devices for a highly demanding global market. HMD has set a benchmark when it comes to manufacturing a plethora of medical disposables, thus aiding medical experts to save and sustain human lives across the globe. All products manufactured at HMD plants are marketed through a highly responsive national distribution network, comprising of more than 4500 authorized dealers, ensuring ready availability of every product from their inventory, even in the most secluded of the areas, backed up by value-adding customer support.</Typography>
                                    <FormatQuoteIcon sx={{ position: "absolute", color: "#78ADD9", fontSize: { md: '70px', sm: "60px", xs: "50px" }, right: "0", bottom: "-35px" }} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
                <Typography component={'img'} src={boxbg} sx={{ position: "absolute", zIndex: '-1', bottom: { sm: "-120px", xs: "-65px" }, width: { sm: "17%", xs: "10%" } }}></Typography>
            </Box>
        </>
    )
}

export default AboutDec
