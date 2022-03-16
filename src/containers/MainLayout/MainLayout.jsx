import { Box } from "@mui/material";
import { NavBar } from "components/NavBar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
    return (
        <Box sx={{ backgroundColor: '#f5f5f5', minHeight:'100vh', padding: 2 }}>
            <NavBar/>
            <Outlet/>
        </Box>
    )
}