import * as React from 'react';
import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SimplePopper({
    name,
    children,
    newValue,
}: {
    children: React.ReactNode;
    name: string;
    newValue?: string;
}) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <div>
            <Button
                aria-describedby={id}
                type="button"
                onClick={handleClick}
                sx={{
                    border: '1px solid rgba(0, 0, 0, 0.23)',
                    borderRadius: '25px',
                    height: '40px',
                    width: '150px',
                    marginLeft: '5px',
                    color: 'black',
                    textTransform: 'none',
                    fontSize: '16px',
                }}
            >
                {name}
            </Button>
            <Popper
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClick={handleClose}
                placement="bottom-start"
            >
                <ClickAwayListener onClickAway={handleClose}>
                    <Box
                        sx={{
                            border: 1,
                            p: 1,
                            bgcolor: 'background.paper',
                            marginTop: '5px',
                        }}
                    >
                        {children}
                    </Box>
                </ClickAwayListener>
            </Popper>
        </div>
    );
}
