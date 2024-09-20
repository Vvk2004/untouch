import React, { useState } from 'react';
import { Box, Container, Grid, ListItem, MenuItem, Typography } from '@mui/material';
import logo from '../../assets/images/logo.png';
import logoSideBar from '../../assets/images/footerlogo.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';

function Navbar() {
    const [state, setState] = useState({ right: false });
    const [openSubmenu, setOpenSubmenu] = useState({});

    const navigate = useNavigate();

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const handleSubmenuToggle = (index) => {
        setOpenSubmenu((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const handleMenuItemClick = (event) => {
        event.stopPropagation();
    };

    const renderMainMenuItems = () => (
        <>
            <Box sx={{ position: 'relative', ':hover': { '.submenu': { display: 'block' } } }}>
                <MenuItem onClick={() => navigate("/")}
                    sx={{ fontWeight: "600", fontSize: { lg: '16px', md: '13px' }, py: 2, ':hover': { backgroundColor: 'unset', color: '#1463A3', transition: '0.5s' } }}>
                    Home
                </MenuItem>
            </Box>
            <Box sx={{ position: 'relative', ':hover': { '.submenu': { display: 'block' } } }}>
                <MenuItem onClick={() => navigate("/aboutus")}
                    sx={{ fontWeight: "600", fontSize: { lg: '16px', md: '13px' }, py: 2, ':hover': { backgroundColor: 'unset', color: '#1463A3', transition: '0.5s' } }}>
                    About Us
                </MenuItem>
            </Box>
            <Box sx={{ position: 'relative', ':hover': { '.submenu': { display: 'block' } } }}>
                <MenuItem
                    sx={{ fontWeight: "600", fontSize: { lg: '16px', md: '13px' }, py: 2, ':hover': { backgroundColor: 'unset', color: '#1463A3', transition: '0.5s' } }}>
                    Products
                    <KeyboardArrowDownIcon />
                </MenuItem>
                <Box className='submenu' sx={{ position: 'absolute', display: 'none', top: '100%', left: '-15%', backgroundColor: '#fff', boxShadow: 1, zIndex: 1 }}>
                    <ListItem sx={{ whiteSpace: 'nowrap', fontWeight: '600', p: 0 }}>
                        <Box>
                            <ListItemButton onClick={() => navigate("/products")} component="a" sx={{ borderBottom: '1px solid grey', ':hover': { backgroundColor: '#1463A3', color: '#fff' }, p: 2 }}>
                                Products
                            </ListItemButton>
                            <ListItemButton onClick={() => navigate("/productdetails")} component="a" sx={{ ':hover': { backgroundColor: '#1463A3', color: '#fff' }, p: 2 }}>
                                Products Details
                            </ListItemButton>
                        </Box>
                    </ListItem>
                </Box>
            </Box>
            <Box sx={{ position: 'relative', ':hover': { '.submenu': { display: 'block' } } }}>
                <MenuItem onClick={() => navigate("/certificate")}
                    sx={{ fontWeight: "600", fontSize: { lg: '16px', md: '13px' }, py: 2, ':hover': { backgroundColor: 'unset', color: '#1463A3', transition: '0.5s' } }}>
                    Certificate
                </MenuItem>
            </Box>
            <Box sx={{ position: 'relative', ':hover': { '.submenu': { display: 'block' } } }}>
                <MenuItem onClick={() => navigate("/brochures")}
                    sx={{ fontWeight: "600", fontSize: { lg: '16px', md: '13px' }, py: 2, ':hover': { backgroundColor: 'unset', color: '#1463A3', transition: '0.5s' } }}>
                    Brochures
                </MenuItem>
            </Box>
            <Box sx={{ position: 'relative', ':hover': { '.submenu': { display: 'block' } } }}>
                <MenuItem onClick={() => navigate("/blogs")}
                    sx={{ fontWeight: "600", fontSize: { lg: '16px', md: '13px' }, py: 2, ':hover': { backgroundColor: 'unset', color: '#1463A3', transition: '0.5s' } }}>
                    Blogs
                </MenuItem>
            </Box>
            <Box sx={{ position: 'relative', ':hover': { '.submenu': { display: 'block' } } }}>
                <MenuItem onClick={() => navigate("/contactus")}
                    sx={{ fontWeight: "600", fontSize: { lg: '16px', md: '13px' }, py: 2, ':hover': { backgroundColor: 'unset', color: '#1463A3', transition: '0.5s' } }}>
                    Contact Us
                </MenuItem>
            </Box>
        </>
    );

    const renderSideMenuItems = () => (
        <List>
            <Box sx={{ position: 'relative' }}>
                <ListItemButton onClick={() => navigate("/")} component="a" href="#home">
                    <ListItemText primary="Home" />
                </ListItemButton>
            </Box>
            <Box sx={{ position: 'relative' }}>
                <ListItemButton onClick={() => navigate("/aboutus")} component="a" href="#aboutUs">
                    <ListItemText primary="About Us" />
                </ListItemButton>
            </Box>
            <Box sx={{ position: 'relative' }}>
                <ListItemButton onClick={(event) => { handleMenuItemClick(event); handleSubmenuToggle(0); }} component="a" href="#products">
                    <ListItemText primary="Products" />
                    <KeyboardArrowDownIcon />
                </ListItemButton>
                {openSubmenu[0] && (
                    <Box sx={{ position: 'relative', backgroundColor: '#1063AA', zIndex: 1 }}>
                        <ListItem sx={{ whiteSpace: 'nowrap', fontWeight: '500', color: '#fff' }}>
                            <Box sx={{ display: 'unset' }}>
                                <ListItemButton onClick={() => navigate("/products")} component="a" href="#products">
                                    - Product
                                </ListItemButton>
                                <ListItemButton onClick={() => navigate("/productdetails")} component="a" href="#productsDetails">
                                    - Product Details
                                </ListItemButton>
                            </Box>
                        </ListItem>
                    </Box>
                )}
            </Box>
            <Box sx={{ position: 'relative' }}>
                <ListItemButton onClick={() => navigate("/certificate")} component="a" href="#certificate">
                    <ListItemText primary="Certificate" />
                </ListItemButton>
            </Box>
            <Box sx={{ position: 'relative' }}>
                <ListItemButton onClick={() => navigate("/brochures")} component="a" href="#brochures">
                    <ListItemText primary="Brochures" />
                </ListItemButton>
            </Box>
            <Box sx={{ position: 'relative' }}>
                <ListItemButton onClick={() => navigate("/blogs")} component="a" href="#blogs">
                    <ListItemText primary="Blogs" />
                </ListItemButton>
            </Box>
            <Box sx={{ position: 'relative' }}>
                <ListItemButton onClick={() => navigate("/contactus")} component="a" href="#contactUs">
                    <ListItemText primary="Contact Us" />
                </ListItemButton>
            </Box>
        </List>
    );

    const list = (anchor) => (
        <Box
            sx={{ width: { sm: 300, xs: 200 }, height: '100vh', p: { sm: 5, xs: '50px 20px 50px 20px' }, backgroundColor: '#1063AA', color: '#fff' }}
            role="presentation"
            onClick={(event) => event.stopPropagation()}
        >
            <Box>
                <Typography component={'img'} src={logoSideBar}></Typography>
            </Box>
            {renderSideMenuItems()}
        </Box>
    );

    return (
        <>
            <Box sx={{
                position: "fixed",
                width: '100%',
                top: "0",
                left: "0",
                zIndex: 1000,
            }}>
                <Box sx={{
                    backgroundColor: "#1063AA",
                    padding: '10px 0',
                }}>
                    <Container>
                        <Box>
                            <Grid container xs={12} sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Grid item sm={4} sx={{ display: "flex" }}>
                                    <EmailIcon sx={{
                                        backgroundColor: "#fff",
                                        color: "#1063AA",
                                        fontSize: { md: "15px", sm: "15px", xs: "10px" },
                                        borderRadius: { sx: "5px", xs: "3px" },
                                        padding: { md: "5px", sm: "2px", xs: "1px" }
                                    }} />
                                    <Typography sx={{ ml: "10px", color: "#fff", fontSize: { md: "16px", sm: "14px", xs: "10px" } }}>
                                        untuch123@gmail.com
                                    </Typography>
                                </Grid>
                                <Grid item sm={4} sx={{ display: "flex", justifyContent: "center" }}>
                                    <Typography sx={{ color: "#fff", mr: "5px", fontSize: { md: "16px", sm: "14px", xs: "10px" } }}>
                                        Follow Us :-
                                    </Typography>
                                    <FacebookIcon sx={{ color: "#fff", fontSize: { md: "24px", sm: "19px", xs: "15px" } }} />
                                    <WhatsAppIcon sx={{
                                        backgroundColor: "#fff",
                                        color: "#1063AA",
                                        borderRadius: { sm: "5px", xs: "2px" },
                                        fontSize: { md: "15px", sm: "10px", xs: "9px" },
                                        padding: { sm: "2px", xs: "1px" },
                                        mt: "3px",
                                        ml: "5px"
                                    }} />
                                    <TwitterIcon sx={{
                                        backgroundColor: "#fff",
                                        color: "#1063AA",
                                        borderRadius: { sm: "5px", xs: "2px" },
                                        fontSize: { md: "15px", sm: "10px", xs: "9px" },
                                        padding: { sm: "2px", xs: "1px" },
                                        mt: "3px",
                                        ml: "5px"
                                    }} />
                                    <InstagramIcon sx={{
                                        backgroundColor: "#fff",
                                        color: "#1063AA",
                                        borderRadius: { sm: "5px", xs: "2px" },
                                        fontSize: { md: "15px", sm: "10px", xs: "9px" },
                                        padding: { sm: "2px", xs: "1px" },
                                        mt: "3px",
                                        ml: "5px"
                                    }} />
                                </Grid>
                                <Grid item sm={4} sx={{ display: "flex", color: "#fff", justifyContent: "end" }}>
                                    <Typography sx={{ fontSize: { md: "16px", sm: "14px", xs: "10px" } }}>
                                        +91 10000 20000
                                    </Typography>
                                    <WifiCalling3Icon sx={{
                                        color: "#1063AA",
                                        backgroundColor: "#fff",
                                        borderRadius: { sm: "5px", xs: "2px" },
                                        fontSize: { md: "15px", sm: "10px", xs: "6px" },
                                        padding: "3px",
                                        ml: "5px"
                                    }} />
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </Box>

                <Box sx={{
                    backgroundColor: "#fff",
                    display: 'flex',
                    boxShadow: '2px 2px 10px #e1e1e1',
                    padding: '0 16px',
                    transition: 'top 0.3s'
                }}>
                    <Container sx={{ display: 'flex', alignItems: 'center' }}>
                        <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography component={'img'} src={logo} sx={{ width: { md: '80%', xs: '60%' } }}></Typography>
                            </Grid>
                            <Grid item sx={{ display: { md: "flex", xs: "none" } }}>
                                {renderMainMenuItems()}
                            </Grid>
                        </Grid>
                    </Container>
                    <Box sx={{ display: { md: 'none', xs: 'flex' }, alignItems: 'center' }}>
                        <React.Fragment key={'right'}>
                            <Button onClick={toggleDrawer('right', true)}><MenuIcon sx={{ fontSize: '30px', color: '#000' }} /></Button>
                            <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
                                {list('right')}
                            </Drawer>
                        </React.Fragment>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Navbar;
