import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import linebg from '../assets/images/Group 16.png';
import certi1 from '../assets/images/Rectangle 56.png';
import certi2 from '../assets/images/Rectangle 57.png';
import bgbox from '../assets/images/Group 12.png'

function CertificatePic() {
    return (
        <>
            <Box sx={{ mt: '150px', position: 'relative' }}>
                <Container>
                    <Box>
                        <Box sx={{ mb: 5 }}>
                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <Typography variant='h4' sx={{ color: "#1463A3", fontWeight: '600' }}>Certificate</Typography>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                                <img src={linebg} width={{ sm: '5%', xs: "10%" }} alt="line background" />
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                                <Typography sx={{ fontWeight: "600" }}>Home / </Typography>
                                <Typography sx={{ fontWeight: "600", color: "#1063AA", ml: "5px" }}>Certificate</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: "center" }}>
                            <Grid container spacing={5}>
                                <Grid item sm={6} xs={12}>
                                    <img src={certi1} width={'100%'} alt="certificate 1" />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <img src={certi2} width={'100%'} alt="certificate 2" />
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
                <Typography component={'img'} src={bgbox} sx={{ position: 'absolute', bottom: '-50px', left: "0", zIndex: '-1', width: '15%' }}></Typography>
            </Box>
        </>
    );
}

export default CertificatePic;
