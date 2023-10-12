import React from 'react';
import { Box } from '@mui/material';
import { TextField } from '@mui/material';

export const MinMaxFilter = () => {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': {
                    m: 1,
                    width: '25ch',
                },
            }}
            noValidate
            autoComplete="off"
            onClick={(e) => e.stopPropagation()}
        >
            <div>
                <TextField
                    id="standard-multiline-flexible"
                    label="Min price"
                    multiline
                    maxRows={4}
                    variant="standard"
                />
            </div>
            <div>
                <TextField
                    id="standard-multiline-flexible"
                    label="Max price"
                    multiline
                    maxRows={4}
                    variant="standard"
                />
            </div>
        </Box>
    );
};
