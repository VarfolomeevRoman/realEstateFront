import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function RoomsFilter() {
    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-native-select">
                    Bedrooms
                </InputLabel>
                <Select
                    native
                    defaultValue=""
                    id="grouped-native-select"
                    label="Bedrooms"
                >
                    <option aria-label="None" value="" />
                    <optgroup label="Bedrooms">
                        <option value={1}>0-1</option>
                        <option value={2}>2+</option>
                    </optgroup>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-native-select">
                    Bathrooms
                </InputLabel>
                <Select
                    native
                    defaultValue=""
                    id="grouped-native-select"
                    label="Bathrooms"
                >
                    <option aria-label="None" value="" />
                    <optgroup label="Bathrooms">
                        <option value={1}>0-1</option>
                        <option value={2}>2+</option>
                    </optgroup>
                </Select>
            </FormControl>
        </div>
    );
}
