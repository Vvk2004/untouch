import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import bgimg from '../assets/images/Group 16.png';
import bgboxes from '../assets/images/Group 440.png';
import bgboxes2 from '../assets/images/Group 433.png';

function HomeContact() {
    return (
        <>
            <Box sx={{ position: { md: 'relative' } }}>
                <Container>

                    <Box sx={{ position: { md: 'relative' } }}>
                            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                                <Box sx={{ width: { xs: '100%', md: '52%' }, backgroundColor: '#fff', padding: { md: "60px 40px 60px 200px", xs: "20px" }, borderRadius: 2, boxShadow: 1 }}>
                                    <Typography variant='h5' sx={{ fontWeight: '600', mb: 3, fontSize: { sm: "24px", xs: "16px" } }}>Send a Message</Typography>
                                    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                        <Box sx={{ display: { sm: 'flex' }, gap: { sm: 5, xs: 3 }, mt: 1, mb: 4, width: '100%' }}>
                                            <Box sx={{ width: { sm: '100%' } }}>
                                                <label htmlFor="firstName" style={{ color: '#1463A3', fontWeight: '600', fontSize: '12px' }}>Frist Name</label>
                                                <input type="text" className='inputs' placeholder='First Name' style={{ border: "none", borderBottom: "1px solid #000", padding: "10px 10px 10px 0" }} />
                                            </Box>
                                            <Box sx={{ width: { sm: '100%' } }}>
                                                <label htmlFor="lastName" style={{ color: '#1463A3', fontWeight: '600', fontSize: '12px' }}>Last Name</label>
                                                <input type="text" className='inputs' placeholder='Last Name' style={{ border: "none", borderBottom: "1px solid #000", padding: "10px 10px 10px 0", marginTop: { sm: 'none', xs: 3 } }} />
                                            </Box>
                                        </Box>
                                        <Box sx={{ mb: 3, display: { sm: 'flex' }, gap: { sm: 5, xs: 3 } }}>
                                            <input type="email" className='inputs' placeholder='Email Address' style={{ border: "none", borderBottom: "1px solid #000", padding: "10px 10px 10px 0" }} />
                                        </Box>
                                        <Box>
                                            <textarea className='inputs' placeholder='Write your message here...' label="Write your message here..." variant="outlined" fullWidth multiline rows={4} style={{ resize: "none", border: "none", borderBottom: "1px solid #000", padding: "10px 10px 10px 0" }} />
                                        </Box>
                                        <Button variant="contained" sx={{ mt: 2, textTransform: 'capitalize', alignSelf: 'flex-start', padding: "5px 20px 5px 20px", backgroundColor: "#1463A3", fontSize: '20px' }}>Send</Button>
                                    </Box>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Box sx={{ width: { xs: '100%', md: '30%' }, top: { md: '50%' }, transform: { md: 'translateY(-50%)' }, left: { md: '3%' }, position: { md: "absolute" }, backgroundColor: '#90bf4f', mt: { md: 0, xs: 3 }, zIndex: "1", p: { xs: "20px", md: "50px 40px 50px 40px" }, borderRadius: 2 }}>
                                    <Typography variant='h5' sx={{ color: '#fff', fontWeight: '500', mb: 3 }}>Contact Info</Typography>
                                    <Typography sx={{ color: '#fff', display: 'flex', mb: 2, mt: 3 }}>
                                        <FmdGoodOutlinedIcon sx={{ margin: "5px 10px 10px 0", backgroundColor: "#fff", color: "#A2D45E", borderRadius: "5px", padding: "5px", fontSize: { sm: "25px", xs: "15px" } }} />
                                        <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: { lg: "15px", xs: "14px" } }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</Typography>
                                    </Typography>
                                    <Typography sx={{ color: '#fff', display: 'flex', alignItems: 'center', mb: 2, mt: 3 }}>
                                        <EmailOutlinedIcon sx={{ mr: 1, backgroundColor: "#fff", color: "#A2D45E", borderRadius: "5px", padding: "5px", fontSize: { sm: "25px", xs: "15px" } }} />
                                        <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: { lg: "15px", xs: "14px" } }}>untuch123@gmail.com</Typography>
                                    </Typography>
                                    <Typography sx={{ color: '#fff', display: 'flex', alignItems: 'center', mb: 2, mt: 3 }}>
                                        <WifiCalling3OutlinedIcon sx={{ mr: 1, backgroundColor: "#fff", color: "#A2D45E", borderRadius: "5px", padding: "5px", fontSize: { sm: "25px", xs: "15px" } }} />
                                        <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: { lg: "15px", xs: "14px" } }}>+91 10000 20000</Typography>
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: "center", gap: 1, mt: { md: 16, xs: 5 } }}>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <FacebookIcon sx={{ color: '#fff', fontSize: "37px" }} />
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", mt: 0 }}>
                                            <WhatsAppIcon sx={{ backgroundColor: "#fff", color: "#A2D45E", borderRadius: "5px", padding: '2px', fontSize: '25px' }} />
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", mt: 0 }}>
                                            <TwitterIcon sx={{ backgroundColor: "#fff", color: "#A2D45E", borderRadius: "5px", padding: "2px", fontSize: '25px' }} />
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", mt: 0 }}>
                                            <InstagramIcon sx={{ backgroundColor: "#fff", color: "#A2D45E", borderRadius: "5px", padding: "2px", fontSize: '25px' }} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                </Container>
            </Box>
        </>
    );
}

export default HomeContact;
