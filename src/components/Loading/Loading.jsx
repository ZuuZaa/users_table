import { Box, CircularProgress } from '@mui/material';

export const Loading = () => {
    return (
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', width:'100vw', height:'100vh'}}>
            <CircularProgress sx={{color: '#311b92'}}/>
        </Box>
    )
}
