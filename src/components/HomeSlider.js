import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider1 from '../assets/images/Rectangle 4.png'
import slider2 from '../assets/images/Group 275.png'
import { Box, Grid } from '@mui/material';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            style={{ display: "block", position: "absolute", top: "50%", right: "20px", transform: "translateY(-50%)", zIndex: 1 }}
            onClick={onClick}>
            <KeyboardArrowRightRoundedIcon sx={{ color: "#1063AA", fontSize: { md: "50px", sm: "30px", xs: "20px" }, backgroundColor: "#78AED9", borderRadius: { md: "10px", xs: "5px" } }} />
        </div>
    );
};
const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            style={{ display: "block", position: "absolute", top: "50%", left: "20px", transform: "translateY(-50%)", zIndex: 1 }}
            onClick={onClick}>
            <KeyboardArrowLeftRoundedIcon sx={{ color: "#1063AA", fontSize: { md: "50px", sm: "30px", xs: "20px" }, backgroundColor: "#78AED9", borderRadius: { md: "10px", xs: "5px" } }} />
        </div>
    );
};

function HomeSlider() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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
            <Box sx={{ mt: { md: "100px", sm: '83px', xs: '76px'} }}>
                <Grid item xs={12} sx={{ overflow: "hidden" }}>
                    <Slider {...settings}>
                        <Box>
                            <img src={slider1} alt="slider1" width={'100%'} />
                        </Box>
                        <Box>
                            <img src={slider2} alt="slider1" width={'100%'} />
                        </Box>
                    </Slider>
                </Grid>
            </Box>

        </>
    )
}

export default HomeSlider
