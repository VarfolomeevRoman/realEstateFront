import React from 'react';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import { Box } from '@mui/material';

import axios from '../redux/axios';

import Main from '../conponents/Main/Main';
import Line from '../conponents/Skip-line/Skip-line';
import Advertise from '../conponents/Advertisements/Advertisements';

export const Home = () => {
    // React.useEffect(() => {
    //     axios.get('/login');
    // }, []);
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Grid container spacing={0}>
                    <Grid item xs={0}>
                        <Item>
                            <Line></Line>
                        </Item>
                    </Grid>
                    <Grid item xs={12} marginTop={2}>
                        <Main></Main>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        container
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="stretch"
                        marginTop={2}
                    >
                        <Item>
                            <Advertise
                                _id={1}
                                price={90000}
                                imageUrl="https://ap.rdcpix.com/b04813efec14581ba5b5f2080544a7b6l-m1346987465od-w214_h190_x2.webp?w=640&q=75"
                                createdAt={'12 june 2022 .'}
                                status="For sale"
                                rooms="2 bed , 2 bath"
                                adress="418 Central Park W, New York, NY 10025"
                                isEditable={true}
                                isFullPost={true}
                                isLoading={false}
                            />
                        </Item>
                        <Item>
                            <Advertise
                                _id={1}
                                price={90000}
                                imageUrl="https://ap.rdcpix.com/b04813efec14581ba5b5f2080544a7b6l-m1346987465od-w214_h190_x2.webp?w=640&q=75"
                                createdAt={'12 june 2022 .'}
                                status="For sale"
                                rooms="2 bed , 2 bath"
                                adress="418 Central Park W, New York, NY 10025"
                                isEditable={true}
                                isFullPost={true}
                                isLoading={false}
                            />
                        </Item>
                        <Item>
                            <Advertise
                                _id={1}
                                price={90000}
                                imageUrl="https://ap.rdcpix.com/b04813efec14581ba5b5f2080544a7b6l-m1346987465od-w214_h190_x2.webp?w=640&q=75"
                                createdAt={'12 june 2022 .'}
                                status="For sale"
                                rooms="2 bed , 2 bath"
                                adress="418 Central Park W, New York, NY 10025"
                                isEditable={true}
                                isFullPost={true}
                                isLoading={false}
                            />
                        </Item>
                        <Item>
                            <Advertise
                                _id={1}
                                price={90000}
                                imageUrl="https://ap.rdcpix.com/b04813efec14581ba5b5f2080544a7b6l-m1346987465od-w214_h190_x2.webp?w=640&q=75"
                                createdAt={'12 june 2022 .'}
                                status="For sale"
                                rooms="2 bed , 2 bath"
                                adress="418 Central Park W, New York, NY 10025"
                                isEditable={true}
                                isFullPost={true}
                                isLoading={false}
                            />
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};
