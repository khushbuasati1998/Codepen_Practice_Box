import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import colors from '../constants/colors';
import logo from '../assets/images/logo.png';

const Header = () => {
    return (
        <AppBar sx={{ position: 'static', background: colors.grey2 }}>
            <Toolbar>
                <img src={logo} width="3%" alt="logo" />
                <Typography sx={{ml: 1, fontWeight: 700}}>Practice Box</Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;