import { Box, Typography } from "@mui/material";
import { SearchBar } from "components/SearchBar";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <Box sx={{flexGrow:1, display:'flex', justifyContent:'space-between', alignItems:'center', backgroundColor: '#311b92', padding: 2 }}>
            <SearchBar />
            <Link to="/" >
                <Typography sx={{color:'#fff'}}>All Users</Typography>
            </Link>
        </Box>
    );
}