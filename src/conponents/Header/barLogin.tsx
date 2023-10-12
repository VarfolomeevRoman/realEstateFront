import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

const LogInButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 14,
    color: 'black',
    backgroundColor: 'white',
    padding: '10px 20px',

    '&:hover': {
        boxShadow: 'none',
        backgroundColor: 'rgba(0,0,255,0.5)',
    },
    '&:active': {
        boxShadow: 'none',
    },
    '&:focus': {},
});
const SignUpButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 14,
    color: 'white',
    backgroundColor: 'black',
    borderRadius: '10px',
    padding: '10px 20px',
    '&:hover': {
        boxShadow: 'none',
        backgroundColor: 'rgba(0,0,255,0.5)',
    },
    '&:active': {
        boxShadow: 'none',
    },
    '&:focus': {},
});

export default function BarLogin() {
    return (
        <Stack spacing={2} direction="row">
            <Link to="/login">
                <LogInButton variant="contained">Log in</LogInButton>
            </Link>

            <Link to="/registration">
                <SignUpButton variant="contained">Sign up</SignUpButton>
            </Link>
        </Stack>
    );
}
