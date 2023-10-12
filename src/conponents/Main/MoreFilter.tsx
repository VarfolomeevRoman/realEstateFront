import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function MoreFilter() {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-native-select">Option</InputLabel>
                <Select
                    native
                    defaultValue=""
                    id="grouped-native-select"
                    label="Bedrooms"
                >
                    <option aria-label="None" value="" />
                    <optgroup>
                        <option value={1}>Option 1</option>
                        <option value={2}>Option 2</option>
                    </optgroup>
                </Select>
            </FormControl>
        </div>
    );
}
