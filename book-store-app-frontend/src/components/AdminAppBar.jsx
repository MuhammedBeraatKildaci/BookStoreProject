import React,{useState} from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminAppbar = () => {

    const pages = ["Books","Categories","Authors","Users"];
    const paths = [
        "/admin/books",
        "/admin/categories",
        "/admin/authors",    
        "/admin/users"
    ];
    const { authItems } = useSelector((state) => state.auth);

    const [anchorElNav, setAnchorElNav] = useState(null);
    const navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (index) => {
        setAnchorElNav(null);
        navigate(paths[index]);
    };

    const handleLogOut=()=>{
        localStorage.removeItem("user")
        navigate("/")
    }

    const loginAndLogoutButton = localStorage.getItem('user')? (
        <Button
            key='login'
            onClick={() => handleLogOut()}
            sx={{ my: 2, color: "white", display: "block" }}
        >
            Logout
        </Button>
    ) : (
        <Button
            key='login'
            onClick={() => navigate("/auth/login")}
            sx={{ my: 2, color: "white", display: "block" }}
        >
            Login
        </Button>
    );

    return (
        <AppBar position='static'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <AutoStoriesIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                    <Typography
                        variant='h6'
                        noWrap
                        component='a'
                        href='/'
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        Book Store
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page, index) => (
                                <MenuItem key={page} onClick={() => handleCloseNavMenu(index)}>
                                    <Typography textAlign='center'>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AutoStoriesIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
                    <Typography
                        variant='h5'
                        noWrap
                        component='a'
                        href=''
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        BS Store
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        {pages.map((page, index) => (
                            <Button
                                key={index}
                                onClick={() => handleCloseNavMenu(index)}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box></Box>

                    {authItems?.isLogin && (
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title='Open settings'>
                                <IconButton sx={{ p: 0 }}>
                                    <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    )}
                    <div>{loginAndLogoutButton}</div>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default AdminAppbar;