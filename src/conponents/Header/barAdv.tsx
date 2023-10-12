import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

const RentalsButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 14,
    textDecoration: 'underline',
    color: 'black',
    backgroundColor: 'white',
    padding: '14px 14px',
    '&:hover': {
        boxShadow: 'none',
        backgroundColor: 'rgba(0,0,255,0.5)',
    },
    '&:active': {
        boxShadow: 'none',
    },
    '&:focus': {},
});
const AdvertiseButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 14,
    color: 'black',
    textDecoration: 'underline',
    backgroundColor: 'white',
    padding: '14px 14px',
    '&:hover': {
        boxShadow: '1px',
        backgroundColor: 'rgba(0,0,255,0.5)',
    },
    '&:active': {
        boxShadow: 'none',
    },
    '&:focus': {},
});

export default function CustomizedButtons() {
    return (
        <Stack spacing={2} direction="row">
            <RentalsButton variant="contained">Manage rentals</RentalsButton>
            <AdvertiseButton variant="contained">Advertise</AdvertiseButton>
        </Stack>
    );
}
