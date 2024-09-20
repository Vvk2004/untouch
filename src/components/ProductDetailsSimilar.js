import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import linebg from '../assets/images/Group 16.png'
import prod1 from '../assets/images/Rectangle 33.png'
import prod2 from '../assets/images/Rectangle 33-1.png'
import prod3 from '../assets/images/Rectangle 33-2.png'
import prod4 from '../assets/images/Rectangle 33-3.png'
import bgbox from '../assets/images/Group 440.png';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

function ProductDetailsSimilar() {
    return (
        <>
            <Box sx={{ mt: { md: 15, sm: 10, xs: 5 }, position: 'relative' }}>
                <Container>
                    <Box>
                        <Box>
                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <Typography variant='h4' sx={{ color: "#1463A3", fontWeight: '600', fontSize: { sm: '34px', xs: '30px' } }}>Similar</Typography>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                                <Typography component={'img'} src={linebg} width={{ sm: '5%', xs: "10%" }}></Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", mt: { sm: 5, xs: 2 } }}>
                            <Grid container xs={12} spacing={3} sx={{ mt: "10px" }}>
                                <Grid item md={3} sm={6} xs={12}>
                                    <Box sx={{ boxShadow: '2px 2px 10px #e1e1e1', backgroundColor: "#fff", borderRadius: "20px" }}>
                                        <Box>
                                            <Typography component={'img'} src={prod1} width={'100%'}></Typography>
                                        </Box>
                                        <Box sx={{ padding: "15px", display: "flex", justifyContent: "space-between" }}>
                                            <Box>
                                                <Typography sx={{ fontWeight: "700", fontSize: "10px" }}>Folly Balloon Catheter Sterile</Typography>
                                                <Typography sx={{ fontWeight: "700", fontSize: "10px" }}>Two way 10FR</Typography>
                                            </Box>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <ChevronRightRoundedIcon sx={{ fontSize: "30px", color: "#fff", width: "100%", borderRadius: "6px", backgroundColor: "#90BF4F" }} />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item md={3} sm={6} xs={12}>
                                    <Box sx={{ boxShadow: '2px 2px 10px #e1e1e1', backgroundColor: "#fff", borderRadius: "20px" }}>
                                        <Box>
                                            <Typography component={'img'} src={prod2} width={'100%'}></Typography>
                                        </Box>
                                        <Box sx={{ padding: "15px", display: "flex", justifyContent: "space-between" }}>
                                            <Box>
                                                <Typography sx={{ fontWeight: "700", fontSize: "10px" }}>Silicone Foley Balloon Catheter Two</Typography>
                                                <Typography sx={{ fontWeight: "700", fontSize: "10px" }}>Way Ribbel Brand 12FR</Typography>
                                            </Box>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <ChevronRightRoundedIcon sx={{ fontSize: "30px", color: "#fff", width: "100%", borderRadius: "5px", backgroundColor: "#90BF4F" }} />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item md={3} sm={6} xs={12}>
                                    <Box sx={{ boxShadow: '2px 2px 10px #e1e1e1', backgroundColor: "#fff", borderRadius: "20px" }}>
                                        <Box>
                                            <Typography component={'img'} src={prod3} width={'100%'}></Typography>
                                        </Box>
                                        <Box sx={{ padding: "15px", display: "flex", justifyContent: "space-between" }}>
                                            <Box>
                                                <Typography sx={{ fontWeight: "700", fontSize: "10px" }}>Endotracheal Tube Sterile Cuffed</Typography>
                                                <Typography sx={{ fontWeight: "700", fontSize: "10px" }}>“Ribbel Brand” Size 4 to 9.5 MM</Typography>
                                            </Box>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <ChevronRightRoundedIcon sx={{ fontSize: "30px", color: "#fff", width: "100%", borderRadius: "5px", backgroundColor: "#90BF4F" }} />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item md={3} sm={6} xs={12}>
                                    <Box sx={{ boxShadow: '2px 2px 10px #e1e1e1', backgroundColor: "#fff", borderRadius: "20px" }}>
                                        <Box>
                                            <Typography component={'img'} src={prod4} width={'100%'}></Typography>
                                        </Box>
                                        <Box sx={{ padding: "15px", display: "flex", justifyContent: "space-between" }}>
                                            <Box>
                                                <Typography sx={{ fontWeight: "700", fontSize: "10px" }}>Silicone Foley Balloon Catheter Two</Typography>
                                                <Typography sx={{ fontWeight: "700", fontSize: "10px" }}>Way Ribbel Brand 18FR</Typography>
                                            </Box>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <ChevronRightRoundedIcon sx={{ fontSize: "30px", color: "#fff", width: "100%", borderRadius: "5px", backgroundColor: "#90BF4F" }} />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
                            <Typography variant='h5' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '2px 2px 10px #e1e1e1', backgroundColor: "#90BF4F", color: '#fff', fontWeight: '500', padding: '5px 0px 5px 20px', borderRadius: '10px' }}>See All <ChevronRightRoundedIcon sx={{ fontSize: '45px', ml: 2 }}/></Typography>
                        </Box>
                    </Box>
                </Container>
                <Typography component={'img'} src={bgbox} sx={{ position: 'absolute', width: '15%', right: '0', bottom: { md: '-150px', sm: '-80px', xs: '-50px' } }}></Typography>
            </Box>
        </>
    )
}

export default ProductDetailsSimilar
