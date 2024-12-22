// react/project/src/theme.ts
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#213547',
        },
        background: {
            default: '#ffffff',
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
            primary: {
            main: 'rgba(255, 255, 255, 0.87)',
        },
        background: {
            default: '#242424',
        },
    },
});