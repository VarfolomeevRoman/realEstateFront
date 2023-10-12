import React, { FC } from 'react';
import logo from '../../dist/rdc-logo-default.svg';
import BasicTabs from './barNav';
import BarAdv from './barAdv';
import BarLogin from './barLogin';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

const Header: FC = () => {
    return (
        <Box>
            <Grid
                container
                spacing={0}
                sx={{
                    display: 'flex',
                    flexGrow: 1,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color: 'black',
                }}
            >
                <Grid item xs={'auto'} md={'auto'}>
                    <div className="header__logo">
                        <Link to="/" className="header__logo-picture">
                            <img
                                style={{ width: '142px', height: '42px' }}
                                src={logo}
                                alt=""
                            />
                        </Link>
                    </div>
                </Grid>
                <Grid item xs={'auto'} md={'auto'}>
                    <BasicTabs></BasicTabs>
                </Grid>
                <Grid item xs={'auto'} md={'auto'}>
                    <BarAdv></BarAdv>
                </Grid>
                <Grid item xs={'auto'} md={'auto'}>
                    <BarLogin></BarLogin>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Header;
