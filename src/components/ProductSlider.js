import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import linebg from '../assets/images/Group 16.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import prod1 from '../assets/images/Rectangle 33.png'
import prod2 from '../assets/images/Rectangle 33-1.png'
import prod3 from '../assets/images/Rectangle 33-2.png'
import prod4 from '../assets/images/Rectangle 33-3.png'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';



const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <Box
            sx={{ display: "block", position: "absolute", top: "50%", right: "-80px", transform: "translateY(-50%)", zIndex: 1 }}
            onClick={onClick}>
            <KeyboardArrowRightRoundedIcon sx={{ color: "#1063AA", fontSize: '50px', backgroundColor: "#78AED9", borderRadius: { md: "10px", xs: "5px" } }} />
        </Box>
    );
};
const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <Box
            style={{ display: "block", position: "absolute", top: "50%", left: "-100px", transform: "translateY(-50%)", zIndex: 1 }}
            onClick={onClick}>
            <KeyboardArrowLeftRoundedIcon sx={{ color: "#1063AA", fontSize: "50px", backgroundColor: "#78AED9", borderRadius: { md: "10px", xs: "5px" } }} />
        </Box>
    );
};

function ProductSlider() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>
            <Box sx={{ mt: '150px', overflow: 'hidden' }}>
                <Container>
                    <Box sx={{ mb: 5 }}>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography variant='h4' sx={{ color: "#1463A3", fontWeight: '600' }}>Products</Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                            <Typography component={'img'} src={linebg} width={{ sm: '5%', xs: "10%" }}></Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                            <Typography sx={{ fontWeight: "600" }}>Home / </Typography>
                            <Typography sx={{ fontWeight: "600", color: "#1063AA", ml: "5px" }}>Products</Typography>
                        </Box>
                    </Box>
                    <Grid item xs={12}>
                        <Slider {...settings}>
                            <Grid container spacing={3} sx={{ padding: "20px 0" }}>
                                <Grid item>
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
                            </Grid>
                            <Grid container spacing={3} sx={{ padding: "20px 0" }}>
                                <Grid item>
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
                            </Grid>
                            <Grid container spacing={3} sx={{ padding: "20px 0" }}>
                                <Grid item>
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
                            </Grid>
                            <Grid container spacing={3} sx={{ padding: "20px 0" }}>
                                <Grid item>
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
                        </Slider>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default ProductSlider
