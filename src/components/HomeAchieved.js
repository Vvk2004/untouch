import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import bgimg from '../assets/images/bgimg.png';
import linesimg from '../assets/images/Group 416.png'
import bgbox from '../assets/images/Group 18.png'

function HomeAchieved() {
    console.log(bgimg);
    return (
        <>
            <Box
                sx={{
                    backgroundImage: `url(${bgimg})`,
                    position: "relative",
                    mt: { sm: "150px", xs: '100px' },
                    width: "100%",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    padding: "50px 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "#fff",
                }}>
                <Container>
                    <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
                        Milestones Achieved So Far
                    </Typography>
                    <Typography component={'img'} src={linesimg}></Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", mt: 3 }}>
                        <Box sx={{ margin: "20px", textAlign: "center" }}>
                            <Typography variant="h3" sx={{ fontWeight: 600, mb: "15px", fontSize: "40px"  }}>100+</Typography>
                            <Typography sx={{ fontSize: "20px" }}>Country</Typography>
                        </Box>
                        <Box sx={{ margin: "20px", textAlign: "center" }}>
                            <Typography variant="h3" sx={{ fontWeight: 600, mb: "15px", fontSize: "40px"  }}>200+</Typography>
                            <Typography sx={{ fontSize: "20px" }}>Employees</Typography>
                        </Box>
                        <Box sx={{ margin: "20px", textAlign: "center" }}>
                            <Typography variant="h3" sx={{ fontWeight: 600, mb: "15px", fontSize: "40px"  }}>50+</Typography>
                            <Typography sx={{ fontSize: "20px" }}>Products</Typography>
                        </Box>
                        <Box sx={{ margin: "20px", textAlign: "center" }}>
                            <Typography variant="h3" sx={{ fontWeight: 600, mb: "15px", fontSize: "40px"  }}>40+</Typography>
                            <Typography sx={{ fontSize: "20px" }}>Years</Typography>
                        </Box>
                        <Box sx={{ margin: "20px", textAlign: "center" }}>
                            <Typography variant="h3" sx={{ fontWeight: 600, mb: "15px", fontSize: "40px"  }}>35+</Typography>
                            <Typography sx={{ fontSize: "20px" }}>Dealers</Typography>
                        </Box>
                    </Box>
                </Container>
                <Typography component={'img'} src={bgbox} sx={{ position: "absolute", top: { lg: "-115px", md: "-85px", sm: "-70px",xs: "-45px" }, right: "0", maxWidth: "10%" }}></Typography>
            </Box>
        </>
    );
}

export default HomeAchieved;
