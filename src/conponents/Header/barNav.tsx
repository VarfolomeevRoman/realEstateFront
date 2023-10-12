import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiTabs: {
            styleOverrides: {
                root: {
                    fontSize: '12px',
                    color: 'black',
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    fontSize: '12px',
                    color: 'black',
                },
            },
        },
    },
});

function samePageLinkNavigation(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) {
    if (
        event.defaultPrevented ||
        event.button !== 0 || // ignore everything but left-click
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey
    ) {
        return false;
    }
    return true;
}

interface LinkTabProps {
    label?: string;
    href?: string;
}

function LinkTab(props: LinkTabProps) {
    return (
        <Tab
            component="a"
            onClick={(
                event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
            ) => {
                if (samePageLinkNavigation(event)) {
                    event.preventDefault();
                }
            }}
            {...props}
        />
    );
}

export default function NavTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        if (
            event.type !== 'click' ||
            (event.type === 'click' &&
                samePageLinkNavigation(
                    event as React.MouseEvent<HTMLAnchorElement, MouseEvent>
                ))
        ) {
            setValue(newValue);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs example"
                >
                    <LinkTab label="Buy" href="" />
                    <LinkTab label="Sell" href="" />
                    <LinkTab label="Rent" href="" />
                    <LinkTab label="Mortgage" href="" />
                    <LinkTab label="Find Realtors" href="" />
                    <LinkTab label="My Home" href="" />
                    <LinkTab label="News & Insights" href="" />
                </Tabs>
            </Box>
        </ThemeProvider>
    );
}
