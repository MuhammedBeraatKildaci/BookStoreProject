import React from 'react'
import { Outlet } from 'react-router-dom'
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import TopMenu from '../../components/TopMenu';

const UserLayout = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <main style={{
      backgroundColor: darkMode ? "#666" : "white",
      color: darkMode && "white",
    }}>
      <TopMenu />
      <Outlet />
    </main>
  )
}

export default UserLayout