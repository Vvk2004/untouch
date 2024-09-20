import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import sliderImg from '../assets/images/Rectangle 58.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import bgbox from '../assets/images/Group 18.png'

function CertificateSlider() {
    return (
        <>
            <Box sx={{ mt: { md: 10, sm: 5, xs: 3  }, position: 'relative' }}>
                <Container>
                    <Box sx={{ display: 'flex', position: "relative", overflow: 'hidden', justifyContent: 'center', mt: 5 }}>
                        <Box sx={{ width: { xs: '100%', sm: '80%', md: '60%' } }}>
                            <Swiper
                                effect={'coverflow'}
                                grabCursor={true}
                                centeredSlides={true}
                                loop={true}
                                slidesPerView={'auto'}
                                coverflowEffect={{
                                    rotate: 0,
                                    stretch: 0,
                                    depth: 922,
                                    modifier: 2.5,
                                }}
                                pagination={{ el: '.swiper-pagination', clickable: true }}
                                navigation={{
                                    nextEl: '.swiper-button-n',
                                    prevEl: '.swiper-button-p',
                                    clickable: true,
                                }}
                                modules={[EffectCoverflow, Pagination, Navigation]}
                                className='swiper_container'
                                style={{ overflow: "unset" }}
                            >
                                <SwiperSlide>
                                    <img src={sliderImg} width={'100%'} alt="slideImage" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={sliderImg} width={'100%'} alt="slideImage" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={sliderImg} width={'100%'} alt="slideImage" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={sliderImg} width={'100%'} alt="slideImage" />
                                </SwiperSlide>
                                <Box className='slider-controler'>
                                    <Box className='swiper-button-p slider-arrow' sx={{ position: "absolute", left: { md: '-20%', sm: '-12%', xs: '0%' }, zIndex: '1', top: "50%", transform: "translateY(-50%)" }}>
                                        <KeyboardArrowLeftRoundedIcon sx={{ color: "#1063AA", fontSize: { md: "50px", sm: "30px", xs: "20px" }, backgroundColor: "#78AED9", borderRadius: { md: "10px", xs: "5px" } }} />
                                    </Box>
                                    <Box className='swiper-button-n slider-arrow' sx={{ position: "absolute", right: { md: '-20%', sm: '-12%', xs: '0%' }, zIndex: '1', top: "50%", transform: "translateY(-50%)" }}>
                                        <KeyboardArrowRightRoundedIcon sx={{ color: "#1063AA", fontSize: { md: "50px", sm: "30px", xs: "20px" }, backgroundColor: "#78AED9", borderRadius: { md: "10px", xs: "5px" } }} />
                                    </Box>
                                    <Box className="swiper-pagination"></Box>
                                </Box>
                            </Swiper>
                        </Box>
                    </Box>
                </Container>
                <Typography component={'img'} src={bgbox} sx={{ position: 'absolute', bottom: '-150px', right: "0", zIndex: '1', width: '15%', display: { sm: 'block', xs: 'none' } }}></Typography>
            </Box>
            <style jsx>{`
                .swiper-button-next,
                .swiper-button-prev {
                    display: none !important;
                }

                .swiper-pagination-bullet {
                    background-color: #C8C8C8;
                    width: 10px;
                    height: 10px;
                    opacity: 1;
                    margin: 0 5px;
                }

                .swiper-pagination-bullet-active {
                    background-color: #1463A3;
                    width: 30px;
                    border-radius: 10px;
                }
            `}</style>
        </>
    )
}

export default CertificateSlider
