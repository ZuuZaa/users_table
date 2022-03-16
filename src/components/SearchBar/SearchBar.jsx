import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { QUERY_ACTIONS } from 'store/query';
import { useDispatch } from 'react-redux';


export const SearchBar = () => {
    const [value, setValue] = useState("");
    const handleChange = () => (event) => setValue(event.target.value);
    const dispatch = useDispatch();
    const setQueryHandler = (data) => dispatch(QUERY_ACTIONS.setQuery(data));
    const navigate = useNavigate();

    return (
        <Box
            component="form"
            onSubmit={event => {
                event.preventDefault();
                setQueryHandler(value);
                navigate('/results')
            }
            }
            noValidate
            autoComplete="off">
            <FormControl variant="filled">
                <OutlinedInput
                    id="search"
                    type="text"
                    value={value}
                    sx={{ backgroundColor: "#fff", width: 400 }}
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






