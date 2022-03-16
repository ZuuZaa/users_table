import { Box } from "@mui/material";
import { NavBar } from "components/NavBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <Box sx={{ backgroundColor: '#f5f5f5', minHeight:'100vh', padding: 2 }}>
            <NavBar/>
            <Outlet/>
        </Box>
    )
}
export default MainLayout;