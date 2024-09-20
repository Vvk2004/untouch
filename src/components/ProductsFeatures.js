import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import linebg from '../assets/images/Group 16.png'
import prd1 from '../assets/images/Rectangle 33.png'
import prd2 from '../assets/images/Rectangle 33-1.png'
import sidebox from '../assets/images/Group 12.png'
import sidebox2 from '../assets/images/Group 18.png'

function ProductsFeatures() {
    return (
        <>
            <Box sx={{ mt: { sm: 10, xs: 5 }, position: "relative" }}>
                <Container>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box>
                            <Typography variant='h4' sx={{ color: "#1463A3", fontWeight: "500", fontSize: { sm: "34px", xs: "26px" } }}>Featured Products</Typography>
                            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                                <Typography component={'img'} src={linebg} sx={{ width: '30%' }}></Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", mt: { sm: 10, xs: 5 } }}>
                        <Grid container xs={12} spacing={5}>
                            <Grid container item md={6} xs={12} spacing={7}>
                                <Grid item xs={12}>
                                    <Box sx={{ backgroundColor: "#fff", display: { sm: "flex" }, boxShadow: "2px 2px 10px #e1e1e1", borderRadius: "20px", padding: { sm: "25px", xs: '35px 0' } }}>
                                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: { sm: "unset", xs: "center" } }}>
                                            <Typography component={'img'} src={prd1} width={'80%'}></Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", width: "100%", justifyContent: { sm: "unset", xs: "center" }, mt: { sm: 0, xs: 2 } }}>
                                            <Box sx={{ padding: { lg: '30px 50px 30px 0', sm: '15px 30px 15px 0', xs: "0px 20px 0 20px" } }}>
                                                <Box>
                                                    <Typography sx={{ fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>Folly Balloon Catheter Sterile Two Way 10FR</Typography>
                                                    <Box sx={{ display: "flex", mt: 3 }}>
                                                        <Typography sx={{ fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>Rate Per pcs : 52</Typography>
                                                        <Typography sx={{ ml: 2, fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>GST : 12%</Typography>
                                                    </Box>
                                                </Box>
                                                <Box sx={{ display: "flex", mt: 3 }}>
                                                    <Typography sx={{ fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>Total Amount :</Typography>
                                                    <Typography sx={{ ml: 1, fontWeight: "600", color: "#1463A3", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>58.24</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box sx={{ backgroundColor: "#fff", display: { sm: "flex" }, boxShadow: "2px 2px 10px #e1e1e1", borderRadius: "20px", padding: { sm: "25px", xs: '35px 0' } }}>
                                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: { sm: "unset", xs: "center" } }}>
                                            <Typography component={'img'} src={prd1} width={'80%'}></Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", width: "100%", justifyContent: { sm: "unset", xs: "center" }, mt: { sm: 0, xs: 2 } }}>
                                            <Box sx={{ padding: { lg: '30px 50px 30px 0', sm: '15px 30px 15px 0', xs: "0px 20px 0 20px" } }}>
                                                <Box>
                                                    <Typography sx={{ fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>Folly Balloon Catheter Sterile Two Way 10FR</Typography>
                                                    <Box sx={{ display: "flex", mt: 3 }}>
                                                        <Typography sx={{ fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>Rate Per pcs : 52</Typography>
                                                        <Typography sx={{ ml: 2, fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>GST : 12%</Typography>
                                                    </Box>
                                                </Box>
                                                <Box sx={{ display: "flex", mt: 3 }}>
                                                    <Typography sx={{ fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>Total Amount :</Typography>
                                                    <Typography sx={{ ml: 1, fontWeight: "600", color: "#1463A3", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>58.24</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box sx={{ backgroundColor: "#fff", display: { sm: "flex" }, boxShadow: "2px 2px 10px #e1e1e1", borderRadius: "20px", padding: { sm: "25px", xs: '35px 0' } }}>
                                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: { sm: "unset", xs: "center" } }}>
                                            <Typography component={'img'} src={prd1} width={'80%'}></Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", width: "100%", justifyContent: { sm: "unset", xs: "center" }, mt: { sm: 0, xs: 2 } }}>
                                            <Box sx={{ padding: { lg: '30px 50px 30px 0', sm: '15px 30px 15px 0', xs: "0px 20px 0 20px" } }}>
                                                <Box>
                                                    <Typography sx={{ fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>Folly Balloon Catheter Sterile Two Way 10FR</Typography>
                                                    <Box sx={{ display: "flex", mt: 3 }}>
                                                        <Typography sx={{ fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>Rate Per pcs : 52</Typography>
                                                        <Typography sx={{ ml: 2, fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>GST : 12%</Typography>
                                                    </Box>
                                                </Box>
                                                <Box sx={{ display: "flex", mt: 3 }}>
                                                    <Typography sx={{ fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>Total Amount :</Typography>
                                                    <Typography sx={{ ml: 1, fontWeight: "600", color: "#1463A3", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>58.24</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box sx={{ backgroundColor: "#fff", display: { sm: "flex" }, boxShadow: "2px 2px 10px #e1e1e1", borderRadius: "20px", padding: { sm: "25px", xs: '35px 0' } }}>
                                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: { sm: "unset", xs: "center" } }}>
                                            <Typography component={'img'} src={prd1} width={'80%'}></Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", width: "100%", justifyContent: { sm: "unset", xs: "center" }, mt: { sm: 0, xs: 2 } }}>
                                            <Box sx={{ padding: { lg: '30px 50px 30px 0', sm: '15px 30px 15px 0', xs: "0px 20px 0 20px" } }}>
                                                <Box>
                                                    <Typography sx={{ fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>Folly Balloon Catheter Sterile Two Way 10FR</Typography>
                                                    <Box sx={{ display: "flex", mt: 3 }}>
                                                        <Typography sx={{ fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>Rate Per pcs : 52</Typography>
                                                        <Typography sx={{ ml: 2, fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>GST : 12%</Typography>
                                                    </Box>
                                                </Box>
                                                <Box sx={{ display: "flex", mt: 3 }}>
                                                    <Typography sx={{ fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>Total Amount :</Typography>
                                                    <Typography sx={{ ml: 1, fontWeight: "600", color: "#1463A3", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>58.24</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container item md={6} xs={12} spacing={7}>
                                <Grid item xs={12}>
                                    <Box sx={{ backgroundColor: "#fff", display: { sm: "flex" }, boxShadow: "2px 2px 10px #e1e1e1", borderRadius: "20px", padding: { sm: "25px", xs: '35px 0' } }}>
                                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: { sm: "unset", xs: "center" } }}>
                                            <Typography component={'img'} src={prd2} width={'80%'}></Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", width: "100%", justifyContent: { sm: "unset", xs: "center" }, mt: { sm: 0, xs: 2 } }}>
                                            <Box sx={{ padding: { lg: '30px 50px 30px 0', sm: '15px 30px 15px 0', xs: "0px 20px 0 20px" } }}>
                                                <Box>
                                                    <Typography sx={{ fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>Folly Balloon Catheter Sterile Two Way 10FR</Typography>
                                                    <Box sx={{ display: "flex", mt: 3 }}>
                                                        <Typography sx={{ fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>Rate Per pcs : 52</Typography>
                                                        <Typography sx={{ ml: 2, fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>GST : 12%</Typography>
                                                    </Box>
                                                </Box>
                                                <Box sx={{ display: "flex", mt: 3 }}>
                                                    <Typography sx={{ fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>Total Amount :</Typography>
                                                    <Typography sx={{ ml: 1, fontWeight: "600", color: "#1463A3", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>58.24</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box sx={{ backgroundColor: "#fff", display: { sm: "flex" }, boxShadow: "2px 2px 10px #e1e1e1", borderRadius: "20px", padding: { sm: "25px", xs: '35px 0' } }}>
                                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: { sm: "unset", xs: "center" } }}>
                                            <Typography component={'img'} src={prd2} width={'80%'}></Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", width: "100%", justifyContent: { sm: "unset", xs: "center" }, mt: { sm: 0, xs: 2 } }}>
                                            <Box sx={{ padding: { lg: '30px 50px 30px 0', sm: '15px 30px 15px 0', xs: "0px 20px 0 20px" } }}>
                                                <Box>
                                                    <Typography sx={{ fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>Folly Balloon Catheter Sterile Two Way 10FR</Typography>
                                                    <Box sx={{ display: "flex", mt: 3 }}>
                                                        <Typography sx={{ fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>Rate Per pcs : 52</Typography>
                                                        <Typography sx={{ ml: 2, fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>GST : 12%</Typography>
                                                    </Box>
                                                </Box>
                                                <Box sx={{ display: "flex", mt: 3 }}>
                                                    <Typography sx={{ fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>Total Amount :</Typography>
                                                    <Typography sx={{ ml: 1, fontWeight: "600", color: "#1463A3", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>58.24</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box sx={{ backgroundColor: "#fff", display: { sm: "flex" }, boxShadow: "2px 2px 10px #e1e1e1", borderRadius: "20px", padding: { sm: "25px", xs: '35px 0' } }}>
                                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: { sm: "unset", xs: "center" } }}>
                                            <Typography component={'img'} src={prd2} width={'80%'}></Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", width: "100%", justifyContent: { sm: "unset", xs: "center" }, mt: { sm: 0, xs: 2 } }}>
                                            <Box sx={{ padding: { lg: '30px 50px 30px 0', sm: '15px 30px 15px 0', xs: "0px 20px 0 20px" } }}>
                                                <Box>
                                                    <Typography sx={{ fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>Folly Balloon Catheter Sterile Two Way 10FR</Typography>
                                                    <Box sx={{ display: "flex", mt: 3 }}>
                                                        <Typography sx={{ fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>Rate Per pcs : 52</Typography>
                                                        <Typography sx={{ ml: 2, fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>GST : 12%</Typography>
                                                    </Box>
                                                </Box>
                                                <Box sx={{ display: "flex", mt: 3 }}>
                                                    <Typography sx={{ fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>Total Amount :</Typography>
                                                    <Typography sx={{ ml: 1, fontWeight: "600", color: "#1463A3", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>58.24</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box sx={{ backgroundColor: "#fff", display: { sm: "flex" }, boxShadow: "2px 2px 10px #e1e1e1", borderRadius: "20px", padding: { sm: "25px", xs: '35px 0' } }}>
                                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: { sm: "unset", xs: "center" } }}>
                                            <Typography component={'img'} src={prd2} width={'80%'}></Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", width: "100%", justifyContent: { sm: "unset", xs: "center" }, mt: { sm: 0, xs: 2 } }}>
                                            <Box sx={{ padding: { lg: '30px 50px 30px 0', sm: '15px 30px 15px 0', xs: "0px 20px 0 20px" } }}>
                                                <Box>
                                                    <Typography sx={{ fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>Folly Balloon Catheter Sterile Two Way 10FR</Typography>
                                                    <Box sx={{ display: "flex", mt: 3 }}>
                                                        <Typography sx={{ fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>Rate Per pcs : 52</Typography>
                                                        <Typography sx={{ ml: 2, fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>GST : 12%</Typography>
                                                    </Box>
                                                </Box>
                                                <Box sx={{ display: "flex", mt: 3 }}>
                                                    <Typography sx={{ fontWeight: "500", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>Total Amount :</Typography>
                                                    <Typography sx={{ ml: 1, fontWeight: "600", color: "#1463A3", fontSize: { lg: "14px", md: "12px", sm: "14px", xs: "12px" }, }}>58.24</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
                <Typography component={'img'} src={sidebox} sx={{ position: "absolute", top: "30px", left: '0', width: "20%", zIndex: "-1", display: { sm: "block", xs: "none" } }}></Typography>
                <Typography component={'img'} src={sidebox2} sx={{ position: "absolute", bottom: { md: "-300px", sm: '-200px' }, right: '0', width: "20%", zIndex: "-1", display: { sm: "block", xs: "none" } }}></Typography>
            </Box>
        </>
    )
}

export default ProductsFeatures
