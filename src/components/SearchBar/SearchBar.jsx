import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Alert, Box, Button, Grid, Snackbar } from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


export const SearchBar = (data) => {

    const navigate = useNavigate();
    const [value, setValue] = useState("");
    const handleChange = () => (event) => setValue(event.target.value);
    const users = data.data.data;
    return (
        <Box
            component="form"
            onSubmit={event => {
                event.preventDefault();
                console.log('value', value)
                //setLoading(false);
                const searchedUser = value => users.filter(element => element.name.includes(value));
                console.log("result", searchedUser(value))
                navigate("/results")
            }
            }
            noValidate
            autoComplete="off">
            <FormControl variant="filled">
                <OutlinedInput
                    id="search"
                    type="text"
                    value={value}
                    sx={{backgroundColor:"#fff", width:400}}
                    placeholder="Search by User Name"
                    onChange={handleChange()}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                type="submit"
                                sx={{ p: '10px' }}
                                aria-label="search"
                                edge="end"
                            >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </Box>
    );
}






