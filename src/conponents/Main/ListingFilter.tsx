import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

export default function ListingFilter() {
    const [state, setState] = React.useState({
        gilad: false,
        jason: false,
        antoine: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const { gilad, jason, antoine } = state;
    const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

    return (
        <Box sx={{ display: 'flex' }}>
            <FormControl sx={{ m: 5 }} component="fieldset" variant="standard">
                <FormLabel component="legend">Listing status</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={gilad}
                                onChange={handleChange}
                                name="gilad"
                            />
                        }
                        label="Any-for sale"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={jason}
                                onChange={handleChange}
                                name="jason"
                            />
                        }
                        label="New costructions"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={antoine}
                                onChange={handleChange}
                                name="antoine"
                            />
                        }
                        label="Recently sold"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={gilad}
                                onChange={handleChange}
                                name="gilad"
                            />
                        }
                        label="Existing homes"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={jason}
                                onChange={handleChange}
                                name="jason"
                            />
                        }
                        label="+55 community"
                    />
                </FormGroup>
            </FormControl>
        </Box>
    );
}
