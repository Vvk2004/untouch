import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import prod1 from '../assets/images/overview1.png'
import prod2 from '../assets/images/overview2.png'
import prod3 from '../assets/images/overview3.png'
import prod4 from '../assets/images/overview4.png'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

function HomeOverview() {
    return (
        <>
            <Box sx={{ pt: { sm: 10, xs: 5 } }}>
                <Container>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Grid container xs={12} spacing={3} sx={{ mt: "10px" }}>
                            <Grid item md={3} sm={6} xs={12}>
                                <Box sx={{ boxShadow: '2px 2px 10px #e1e1e1', backgroundColor: "#fff", borderRadius: "20px" }}>
                                    <Box>
                                        <Typography component={'img'} src={prod1} width={'100%'}></Typography>
                                    </Box>
                                    <Box sx={{ padding: "10px 10px 10px 15px", display: "flex", justifyContent: "space-between" }}>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <Typography sx={{ fontWeight: "700", fontSize: "12px" }}>About UnTuch</Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <Typography sx={{ display: 'flex', padding: "2px 5px", alignItems: 'center', color: "#fff", width: "100%", borderRadius: "6px", backgroundColor: "#90BF4F", fontSize: '10px' }}>Learn More<ChevronRightRoundedIcon sx={{ fontSize: "20px" }} /></Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={3} sm={6} xs={12}>
                                <Box sx={{ boxShadow: '2px 2px 10px #e1e1e1', backgroundColor: "#fff", borderRadius: "20px" }}>
                                    <Box>
                                        <Typography component={'img'} src={prod2} width={'100%'}></Typography>
                                    </Box>
                                    <Box sx={{ padding: "10px 10px 10px 15px", display: "flex", justifyContent: "space-between" }}>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <Typography sx={{ fontWeight: "700", fontSize: "12px" }}>Company Overview</Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <Typography sx={{ display: 'flex', padding: "2px 5px", alignItems: 'center', color: "#fff", width: "100%", borderRadius: "6px", backgroundColor: "#90BF4F", fontSize: '10px' }}>Learn More<ChevronRightRoundedIcon sx={{ fontSize: "20px" }} /></Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={3} sm={6} xs={12}>
                                <Box sx={{ boxShadow: '2px 2px 10px #e1e1e1', backgroundColor: "#fff", borderRadius: "20px" }}>
                                    <Box>
                                        <Typography component={'img'} src={prod3} width={'100%'}></Typography>
                                    </Box>
                                    <Box sx={{ padding: "10px 10px 10px 15px", display: "flex", justifyContent: "space-between" }}>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <Typography sx={{ fontWeight: "700", fontSize: "12px" }}>Healthcare Product</Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <Typography sx={{ display: 'flex', padding: "2px 5px", alignItems: 'center', color: "#fff", width: "100%", borderRadius: "6px", backgroundColor: "#90BF4F", fontSize: '10px' }}>Learn More<ChevronRightRoundedIcon sx={{ fontSize: "20px" }} /></Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={3} sm={6} xs={12}>
                                <Box sx={{ boxShadow: '2px 2px 10px #e1e1e1', backgroundColor: "#fff", borderRadius: "20px" }}>
                                    <Box>
                                        <Typography component={'img'} src={prod4} width={'100%'}></Typography>
                                    </Box>
                                    <Box sx={{ padding: "10px 10px 10px 15px", display: "flex", justifyContent: "space-between" }}>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <Typography sx={{ fontWeight: "700", fontSize: "12px" }}>Our Vision</Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <Typography sx={{ display: 'flex', padding: "2px 5px", alignItems: 'center', color: "#fff", width: "100%", borderRadius: "6px", backgroundColor: "#90BF4F", fontSize: '10px' }}>Learn More<ChevronRightRoundedIcon sx={{ fontSize: "20px" }} /></Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default HomeOverview
