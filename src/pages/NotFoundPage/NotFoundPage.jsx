import { Box, Typography } from '@mui/material';

const NotFoundPage = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
            <Typography sx={{ color: '#311b92' }} variant='h1'>Page Not Found</Typography>
        </Box>
    )
}
export default NotFoundPage;