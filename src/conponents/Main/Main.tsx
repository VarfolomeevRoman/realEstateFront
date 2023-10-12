import { FC } from 'react';
import { Box, TextField, Grid, Paper } from '@mui/material';
import SimplePopper from './SimplePopper';
import * as React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MinMaxFilter } from './MinMaxFilter';
import PropertyTypeFilter from './PropertyTypeFilter';
import RoomsFilter from './RoomsFilter';
import ListingFilter from './ListingFilter';
import MoreFilter from './MoreFilter';

const Main: FC = () => {
    // const [age, setAge] = React.useState('');

    // const handleChange = (event: SelectChangeEvent) => {
    //     setAge(event.target.value as string);
    // };

    const [propertyTypeTitle, setPropertyTypeTitle] =
        React.useState('Property type');
    const onChange = (value: string) => {
        setPropertyTypeTitle(value);
    };

    return (
        <Box>
            <Grid
                container
                spacing={0}
                sx={{
                    display: 'flex',
                    flexGrow: 1,
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                }}
            >
                <Grid>
                    <TextField
                        className="field"
                        id="input-with-sx"
                        label="Address,City,ZIP"
                        variant="outlined"
                        InputProps={{
                            style: {
                                borderRadius: 24,
                                height: 40,
                            },
                        }}
                    />
                </Grid>
                <Grid>
                    <SimplePopper name={'Price'}>
                        <MinMaxFilter></MinMaxFilter>
                    </SimplePopper>
                </Grid>
                <Grid>
                    <SimplePopper name={propertyTypeTitle}>
                        <PropertyTypeFilter
                            onChange={onChange}
                        ></PropertyTypeFilter>
                    </SimplePopper>
                </Grid>
                <Grid>
                    <SimplePopper name={'Rooms'}>
                        <RoomsFilter></RoomsFilter>
                    </SimplePopper>
                </Grid>
                <Grid>
                    <SimplePopper name={'Listing status'}>
                        <ListingFilter></ListingFilter>
                    </SimplePopper>
                </Grid>
                <Grid>
                    <SimplePopper name={'More'}>
                        <MoreFilter></MoreFilter>
                    </SimplePopper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Main;
