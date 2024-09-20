import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import logo from '../../assets/images/footerlogo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <>
      <Box sx={{ background: "#1463A3", mt: { sm: "130px", xs: '80px' } }}>
        <Container>
          <Box sx={{ p: 8 }}>
            <Grid container xs={12}>
              <Grid item md={4} xs={12}>
                <Typography component={'img'} src={logo}></Typography>
                <Typography sx={{ color: "#fff", mt: 3, fontSize: "14px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stands.</Typography>
                <Box sx={{ display: 'flex', alignItems: "center", gap: 1, mt: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mt: { sm: 0, xs: 2 } }}>
                    <FacebookIcon sx={{ color: '#fff', fontSize: "35px" }} />
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mt: { sm: 0, xs: 2 } }}>
                    <WhatsAppIcon sx={{ backgroundColor: "#fff", color: "#1463A3", borderRadius: "5px", padding: '2px' }} />
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mt: { sm: 0, xs: 2 } }}>
                    <TwitterIcon sx={{ backgroundColor: "#fff", color: "#1463A3", borderRadius: "5px", padding: "2px" }} />
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mt: { sm: 0, xs: 2 } }}>
                    <InstagramIcon sx={{ backgroundColor: "#fff", color: "#1463A3", borderRadius: "5px", padding: "2px" }} />
                  </Box>
                </Box>
              </Grid>
              <Grid item container md={8} xs={12} sx={{ mt: { md: 0, xs: 3 } }} spacing={3}>
                <Grid item sm={3} xs={6} sx={{ display: "flex", justifyContent: { md: "end", xs: "center" } }}>
                  <Box>
                    <Typography sx={{ color: '#fff', fontWeight: "600", fontSize: { md: "18px", xs: "14px" } }}>Company</Typography>
                    <Typography sx={{ color: '#fff', mt: 2, fontSize: { md: "14px", xs: "12px" }, fontWeight: "500" }}>Careers</Typography>
                    <Typography sx={{ color: '#fff', mt: 2, fontSize: { md: "14px", xs: "12px" }, fontWeight: "500" }}>Updates</Typography>
                    <Typography sx={{ color: '#fff', mt: 2, fontSize: { md: "14px", xs: "12px" }, fontWeight: "500" }}>Job</Typography>
                    <Typography sx={{ color: '#fff', mt: 2, fontSize: { md: "14px", xs: "12px" }, fontWeight: "500" }}>Announce</Typography>
                  </Box>
                </Grid>
                <Grid item sm={3} xs={6} sx={{ display: "flex", justifyContent: { md: "end", xs: "center" } }}>
                  <Box>
                    <Typography sx={{ color: '#fff', fontWeight: "600", fontSize: { md: "18px", xs: "14px" } }}>About Us</Typography>
                    <Typography sx={{ color: '#fff', mt: 2, fontSize: { md: "14px", xs: "12px" }, fontWeight: "500" }}>Careers</Typography>
                    <Typography sx={{ color: '#fff', mt: 2, fontSize: { md: "14px", xs: "12px" }, fontWeight: "500" }}>Updates</Typography>
                    <Typography sx={{ color: '#fff', mt: 2, fontSize: { md: "14px", xs: "12px" }, fontWeight: "500" }}>Job</Typography>
                    <Typography sx={{ color: '#fff', mt: 2, fontSize: { md: "14px", xs: "12px" }, fontWeight: "500" }}>Announce</Typography>
                  </Box>
                </Grid>
                <Grid item sm={3} xs={6} sx={{ display: "flex", justifyContent: { md: "end", xs: "center" } }}>
                  <Box>
                    <Typography sx={{ color: '#fff', fontWeight: "600", fontSize: { md: "18px", xs: "14px" } }}>Our services</Typography>
                    <Typography sx={{ color: '#fff', mt: 2, fontSize: { md: "14px", xs: "12px" }, fontWeight: "500" }}>Careers</Typography>
                    <Typography sx={{ color: '#fff', mt: 2, fontSize: { md: "14px", xs: "12px" }, fontWeight: "500" }}>Updates</Typography>
                    <Typography sx={{ color: '#fff', mt: 2, fontSize: { md: "14px", xs: "12px" }, fontWeight: "500" }}>Job</Typography>
                    <Typography sx={{ color: '#fff', mt: 2, fontSize: { md: "14px", xs: "12px" }, fontWeight: "500" }}>Announce</Typography>
                  </Box>
                </Grid>
                <Grid item sm={3} xs={6} sx={{ display: "flex", justifyContent: { md: "end", xs: "center" } }}>
                  <Box>
                    <Typography sx={{ color: '#fff', fontWeight: "600", fontSize: { md: "18px", xs: "14px" } }}>Contact Us</Typography>
                    <Typography sx={{ color: '#fff', mt: 2, fontSize: { md: "14px", xs: "12px" }, fontWeight: "500" }}>Careers</Typography>
                    <Typography sx={{ color: '#fff', mt: 2, fontSize: { md: "14px", xs: "12px" }, fontWeight: "500" }}>Updates</Typography>
                    <Typography sx={{ color: '#fff', mt: 2, fontSize: { md: "14px", xs: "12px" }, fontWeight: "500" }}>Job</Typography>
                    <Typography sx={{ color: '#fff', mt: 2, fontSize: { md: "14px", xs: "12px" }, fontWeight: "500" }}>Announce</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Box sx={{ color: "#fff", backgroundColor: "#3A7BB1", display: "flex", justifyContent: "center" }}>
          <Typography sx={{ p: 1, fontSize: { sm: "16px", xs: "14px" } }}>All Rights Reserved @ UN TUCH</Typography>
        </Box>
      </Box>
    </>
  )
}

export default Footer
