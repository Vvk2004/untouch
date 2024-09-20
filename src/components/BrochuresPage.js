import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import linebg from '../assets/images/Group 16.png'
import singleImg from '../assets/images/Rectangle 65.png';
import bgbox from '../assets/images/Group 18.png'
import bgbox1 from '../assets/images/Group 11-2.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';

function BrochuresPage() {
    return (
        <>
            <Box sx={{ mt: '150px', position: 'relative' }}>
                <Container>
                    <Box>
                        <Box sx={{ mb: 5 }}>
                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <Typography variant='h4' sx={{ color: "#1463A3", fontWeight: '600' }}>Brochures</Typography>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                                <Typography component={'img'} src={linebg} width={{ sm: '5%', xs: "10%" }}></Typography>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                                <Typography sx={{ fontWeight: "600" }}>Home / </Typography>
                                <Typography sx={{ fontWeight: "600", color: "#1063AA", ml: "5px" }}>Brochures</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', position: "relative", overflow: 'hidden', justifyContent: 'center', mt: 5 }}>
                            <Box sx={{ width: '100%' }}>
                                <Swiper
                                    grabCursor={true}
                                    centeredSlides={true}
                                    loop={true}
                                    slidesPerView={1}
                                    coverflowEffect={{
                                        rotate: 0,
                                        stretch: 0,
                                        depth: 2000,
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
                                    <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
                                        <img src={singleImg} width={'70%'} alt="slideImage" />
                                    </SwiperSlide>
                                    <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
                                        <img src={singleImg} width={'70%'} alt="slideImage" />
                                    </SwiperSlide>
                                    <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
                                        <img src={singleImg} width={'70%'} alt="slideImage" />
                                    </SwiperSlide>
                                    <Box className='slider-controler'>
                                        <Box className='swiper-button-p slider-arrow' sx={{ position: "absolute", left: 0, zIndex: '1', top: "50%", transform: "translateY(-50%)" }}>
                                            <KeyboardArrowLeftRoundedIcon sx={{ color: "#1063AA", fontSize: { md: "50px", sm: "30px", xs: "20px" }, backgroundColor: "#78AED9", borderRadius: { md: "10px", xs: "5px" } }} />
                                        </Box>
                                        <Box className='swiper-button-n slider-arrow' sx={{ position: "absolute", right:0, zIndex: '1', top: "50%", transform: "translateY(-50%)" }}>
                                            <KeyboardArrowRightRoundedIcon sx={{ color: "#1063AA", fontSize: { md: "50px", sm: "30px", xs: "20px" }, backgroundColor: "#78AED9", borderRadius: { md: "10px", xs: "5px" } }} />
                                        </Box>
                                        <Box className="swiper-pagination"></Box>
                                    </Box>
                                </Swiper>
                            </Box>
                        </Box>
                    </Box>
                </Container>
                <Typography component={'img'} src={bgbox} sx={{ position: 'absolute', right: "0", bottom: { md: '-150px', sm: '-140px', xs: '-90px' }, width: '15%'}}></Typography>
                <Typography component={'img'} src={bgbox1} sx={{ position: 'absolute', left: "0", top: '0px', width: '15%' }}></Typography>
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

export default BrochuresPage
