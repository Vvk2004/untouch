import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import linebg from '../assets/images/Group 16.png'
import prd1 from '../assets/images/prdlong1.png'
import prd2 from '../assets/images/prdlong2.png'
import prd3 from '../assets/images/prdlong3.png'
import prdhover from '../assets/images/Rectangle 34.png'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

function ProductsPrdPic() {
    return (
        <>
            <Box sx={{ mt: { md: 25, sm: 15, xs: 10 } }}>
                <Container>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box>
                            <Typography variant='h4' sx={{ color: "#1463A3", fontWeight: "500", fontSize: { sm: "34px", xs: "26px" } }}>Featured Products</Typography>
                            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                                <Typography component={'img'} src={linebg} sx={{ width: '30%' }}></Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ mt: { md: 15, sm: 10, xs: 5 }, display: "flex", justifyContent: "center" }}>
                        <Grid container xs={12} spacing={3}>
                            <Grid item sm={4} xs={12}>
                                <Box sx={{ position: "relative" }}>
                                    <Typography component={'img'} src={prd1} width={'100%'} sx={{ zIndex: '-1' }}></Typography>
                                    <Typography component={'img'} src={prdhover} sx={{ position: "absolute", top: "0", left: '0', width: '100%' }}></Typography>
                                    <Box sx={{ position: "absolute", bottom: { lg: "30px", md: '20px', sm: "15px", xs: "20px" }, display: "flex", justifyContent: "space-between", width: "100%" }}>
                                        <Box sx={{ padding: "0 0 0 20px", width: '60%' }}>
                                            <Typography sx={{ fontWeight: "500", color: '#fff', fontSize: { lg: '14px', md: '10px', sm: '8px', xs: "14px" } }}>Folly Balloon Catheter Sterile Two way 10FR</Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", padding: "0 20px 0 0px" }}>
                                            <ChevronRightRoundedIcon sx={{ fontSize: { lg: "45px", md: "35px", sm: '25px', xs: '40px' }, color: "#fff", width: "100%", borderRadius: "6px", backgroundColor: "#90BF4F" }} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <Box sx={{ position: "relative" }}>
                                    <Typography component={'img'} src={prd2} width={'100%'} sx={{ zIndex: '-1' }}></Typography>
                                    <Typography component={'img'} src={prdhover} sx={{ position: "absolute", top: "0", left: '0', width: '100%' }}></Typography>
                                    <Box sx={{ position: "absolute", bottom: { lg: "30px", md: '20px', sm: "15px", xs: "20px" }, display: "flex", justifyContent: "space-between", width: "100%" }}>
                                        <Box sx={{ padding: "0 0 0 20px", width: '60%' }}>
                                            <Typography sx={{ fontWeight: "500", color: '#fff', fontSize: { lg: '14px', md: '10px', sm: '8px', xs: "14px" } }}>Folly Balloon Catheter Sterile Two way 10FR</Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", padding: "0 20px 0 0px" }}>
                                            <ChevronRightRoundedIcon sx={{ fontSize: { lg: "45px", md: "35px", sm: '25px', xs: '40px' }, color: "#fff", width: "100%", borderRadius: "6px", backgroundColor: "#90BF4F" }} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <Box sx={{ position: "relative" }}>
                                    <Typography component={'img'} src={prd3} width={'100%'} sx={{ zIndex: '-1' }}></Typography>
                                    <Typography component={'img'} src={prdhover} sx={{ position: "absolute", top: "0", left: '0', width: '100%' }}></Typography>
                                    <Box sx={{ position: "absolute", bottom: { lg: "30px", md: '20px', sm: "15px", xs: "20px" }, display: "flex", justifyContent: "space-between", width: "100%" }}>
                                        <Box sx={{ padding: "0 0 0 20px", width: '60%' }}>
                                            <Typography sx={{ fontWeight: "500", color: '#fff', fontSize: { lg: '14px', md: '10px', sm: '8px', xs: "14px" } }}>Folly Balloon Catheter Sterile Two way 10FR</Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", padding: "0 20px 0 0px" }}>
                                            <ChevronRightRoundedIcon sx={{ fontSize: { lg: "45px", md: "35px", sm: '25px', xs: '40px' }, color: "#fff", width: "100%", borderRadius: "6px", backgroundColor: "#90BF4F" }} />
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

export default ProductsPrdPic
