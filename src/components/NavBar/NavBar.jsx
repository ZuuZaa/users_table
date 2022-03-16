import { Box } from "@mui/material";
import { SearchBar } from "components/SearchBar";

export const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: '#311b92', padding: 2 }}>
            <SearchBar />
        </Box>
    );
}