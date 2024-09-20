import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import linebg from '../assets/images/Group 16.png'
import blogs1 from '../assets/images/blogs1.png'
import blogs2 from '../assets/images/blogs2.png'
import blogs3 from '../assets/images/blogs3.png'
import blogs4 from '../assets/images/blogs4.png'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import bgbox from '../assets/images/Group 11-2.png'
import bgbox2 from '../assets/images/Group 18.png'

function BlogsPage() {
    return (
        <>
            <Box sx={{ mt: '150px', position: 'relative' }}>
                <Container>
                    <Box>
                        <Box sx={{ mb: 5 }}>
                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <Typography variant='h4' sx={{ color: "#1463A3", fontWeight: '600' }}>Blogs</Typography>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                                <Typography component={'img'} src={linebg} width={{ sm: '5%', xs: "10%" }}></Typography>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                                <Typography sx={{ fontWeight: "600" }}>Home / </Typography>
                                <Typography sx={{ fontWeight: "600", color: "#1063AA", ml: "5px" }}>Blogs</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Grid container xs={12} spacing={5}>
                                <Grid item sm={6} xs={12}>
                                    <Box sx={{ backgroundColor: '#fff', boxShadow: '2px 2px 10px #e1e1e1', borderRadius: '15px' }}>
                                        <Box>
                                            <Typography component={'img'} src={blogs1} sx={{ width: '100%' }}></Typography>
                                        </Box>
                                        <Box sx={{ padding: '30px 30px 0 30px' }}>
                                            <Typography sx={{ fontWeight: '600' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                                            <Typography sx={{ color: '#8B8B8B', mt: 1, fontWeight: '500', fontSize: '10px' }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
                                        </Box>
                                        <Box sx={{ mt: 3, backgroundColor: '#fff', borderTop: '1px solid #C9C9C9', borderRadius: "15px" }}>
                                            <Typography sx={{ display: 'flex', color: '#8B8B8B', fontWeight: '500', padding: '10px 30px 10px 30px' }}>
                                                <CalendarTodayIcon sx={{ color: '#90BF4F', mr: 1, fontSize: '20px', display: 'flex', alignItems: 'center' }} />
                                                11th May 2024
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Box sx={{ backgroundColor: '#fff', boxShadow: '2px 2px 10px #e1e1e1', borderRadius: '15px' }}>
                                        <Box>
                                            <Typography component={'img'} src={blogs2} sx={{ width: '100%' }}></Typography>
                                        </Box>
                                        <Box sx={{ padding: '30px 30px 0 30px' }}>
                                            <Typography sx={{ fontWeight: '600' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                                            <Typography sx={{ color: '#8B8B8B', mt: 1, fontWeight: '500', fontSize: '10px' }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
                                        </Box>
                                        <Box sx={{ mt: 3, backgroundColor: '#fff', borderTop: '1px solid #C9C9C9', borderRadius: "15px" }}>
                                            <Typography sx={{ display: 'flex', color: '#8B8B8B', fontWeight: '500', padding: '10px 30px 10px 30px' }}>
                                                <CalendarTodayIcon sx={{ color: '#90BF4F', mr: 1, fontSize: '20px', display: 'flex', alignItems: 'center' }} />
                                                11th May 2024
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Box sx={{ backgroundColor: '#fff', boxShadow: '2px 2px 10px #e1e1e1', borderRadius: '15px' }}>
                                        <Box>
                                            <Typography component={'img'} src={blogs3} sx={{ width: '100%' }}></Typography>
                                        </Box>
                                        <Box sx={{ padding: '30px 30px 0 30px' }}>
                                            <Typography sx={{ fontWeight: '600' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                                            <Typography sx={{ color: '#8B8B8B', mt: 1, fontWeight: '500', fontSize: '10px' }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
                                        </Box>
                                        <Box sx={{ mt: 3, backgroundColor: '#fff', borderTop: '1px solid #C9C9C9', borderRadius: "15px" }}>
                                            <Typography sx={{ display: 'flex', color: '#8B8B8B', fontWeight: '500', padding: '10px 30px 10px 30px' }}>
                                                <CalendarTodayIcon sx={{ color: '#90BF4F', mr: 1, fontSize: '20px', display: 'flex', alignItems: 'center' }} />
                                                11th May 2024
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Box sx={{ backgroundColor: '#fff', boxShadow: '2px 2px 10px #e1e1e1', borderRadius: '15px' }}>
                                        <Box>
                                            <Typography component={'img'} src={blogs4} sx={{ width: '100%' }}></Typography>
                                        </Box>
                                        <Box sx={{ padding: '30px 30px 0 30px' }}>
                                            <Typography sx={{ fontWeight: '600' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                                            <Typography sx={{ color: '#8B8B8B', mt: 1, fontWeight: '500', fontSize: '10px' }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
                                        </Box>
                                        <Box sx={{ mt: 3, backgroundColor: '#fff', borderTop: '1px solid #C9C9C9', borderRadius: "15px" }}>
                                            <Typography sx={{ display: 'flex', color: '#8B8B8B', fontWeight: '500', padding: '10px 30px 10px 30px' }}>
                                                <CalendarTodayIcon sx={{ color: '#90BF4F', mr: 1, fontSize: '20px', display: 'flex', alignItems: 'center' }} />
                                                11th May 2024
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
                <Typography component={'img'} src={bgbox} sx={{ position: 'absolute', width: '20%', top: '50%', left: '0', zIndex: '-1' }}></Typography>
                <Typography component={'img'} src={bgbox2} sx={{ position: 'absolute', width: '10%', bottom: '-140px', right: '0', zIndex: '1', display: { sm: 'block', xs: 'none' } }}></Typography>
            </Box>
        </>
    )
}

export default BlogsPage
