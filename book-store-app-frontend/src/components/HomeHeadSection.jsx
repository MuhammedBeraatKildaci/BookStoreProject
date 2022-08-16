import { Badge, IconButton, Typography } from '@mui/material'
import React from 'react'
import "../styles/homePage.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileBtn from './ProfileBtn';
import Toggle from './Toggle';
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const HomeHeadSection = () => {
    const navigate = useNavigate()
    const { cartItems } = useSelector(state => state.cart)

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="home-head">
            <div className="home-top-section">
                <div>
                    {localStorage.getItem("user") ? <ProfileBtn /> :
                        <IconButton onClick={() => navigate("/auth/login")}>
                            <Badge badgeContent={"Login"} color="info">
                            <LoginIcon sx={{ color: darkMode && "#fff" }}/>
                            </Badge>
                        </IconButton>
                    }
                </div>
                <div>
                    <IconButton onClick={() => navigate("/cart")}>
                        <Badge badgeContent={cartItems.length} color="success">
                            <ShoppingCartIcon sx={{ color: darkMode && "#fff" }} />
                        </Badge>
                    </IconButton>
                </div>
                <div>
                    <Toggle />
                </div>
            </div>
            <div>
                <img className='book-background-image' src="../images/homeHeadSection.jpg" alt="book-background" />
            </div>
            <div className="book-head-text">
                <div className="animated-title">
                    <div className="text-top">
                        <div>
                            <Typography variant='h1'>BTK AKADEMİ</Typography>
                            <Typography variant='h1'>INNOVA BİLİŞİM</Typography>
                        </div>
                    </div>
                    <div className="text-bottom">
                        <Typography className="text-bottom-info" variant='h3'>JAVA & REACT BOOTCAMP</Typography>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HomeHeadSection