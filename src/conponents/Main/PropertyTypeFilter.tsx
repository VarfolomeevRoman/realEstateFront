import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function PropertyTypeFilter({
    onChange,
}: {
    onChange: (value: string) => void;
}) {
    const handleChange = (event: SelectChangeEvent) => {
        const newValue = event.target.value as string;
        onChange(newValue); // Вызываем функцию обратного вызова с выбранным значением
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-native-select">
                    Grouping
                </InputLabel>
                <Select
                    native
                    onChange={handleChange}
                    id="grouped-native-select"
                    label="Grouping"
                >
                    <option aria-label="None" value="" />
                    <optgroup label="Property type">
                        <option value={'Any'}>Any</option>
                        <option value={'House'}>House</option>
                        <option value={'Condo'}>Condo</option>
                        <option value={'Multi family'}>Multi family</option>
                        <option value={'Farm'}>Farm</option>
                        <option value={'Land'}>Land</option>
                    </optgroup>
                </Select>
            </FormControl>
        </div>
    );
}
