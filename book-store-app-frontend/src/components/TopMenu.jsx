import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import Toggle from './Toggle';
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Badge, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const TopMenu = () => {
    const navigate = useNavigate()
    const { cartItems } = useSelector(state => state.cart)
    const { favoriteItems } = useSelector(state => state.favorite)

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleLogOut=()=>{
        localStorage.removeItem("user")
        navigate("/auth/login")
    }
  return (
    <div className="home-top-section">
                <div>
                    {localStorage.getItem("user") ?
                        <IconButton onClick={() => handleLogOut()}>
                            <Badge badgeContent={"LogOut"} color="warning">
                                <LogoutIcon sx={{ color: darkMode && "#fff" }} />
                            </Badge>
                        </IconButton>
                        :
                        <IconButton onClick={() => navigate("/auth/login")}>
                            <Badge badgeContent={"Login"} color="warning">
                                <LoginIcon sx={{ color: darkMode && "#fff" }} />
                            </Badge>
                        </IconButton>
                    }
                </div>
                <div>
                    <IconButton onClick={() => navigate("/favorite")}>
                        <Badge badgeContent={favoriteItems.length} color="error">
                            <FavoriteIcon sx={{ color: darkMode && "#fff" }} />
                        </Badge>
                    </IconButton>
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
  )
}

export default TopMenu