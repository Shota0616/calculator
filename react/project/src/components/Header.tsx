import React, { useContext, useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    InputBase,
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    CssBaseline,
    ThemeProvider,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Divider,
} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Context } from '../Context';
import { useTranslation } from 'react-i18next';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
        border: '1px solid rgba(0, 0, 0, 1)',
    },
    marginLeft: 0,
    width: '100%',
    border: '1px solid rgba(0, 0, 0, 0.23)',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const Header = () => {
    const { t, i18n } = useTranslation();
    const { theme, toggleTheme, lang, setLang } = useContext(Context);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawerContent = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </ListItem>
                <Divider />
                <ListItem>
                    <FormControl variant="outlined" margin="none" sx={{ width: '100%' }}>
                        <InputLabel id="lang-select-label">{t('language')}</InputLabel>
                        <Select
                            labelId="lang-select-label"
                            value={lang}
                            onChange={(e) => {
                                const newLang = e.target.value as string;
                                setLang(newLang);
                                i18n.changeLanguage(newLang);
                            }}
                            label={t('language')}
                        >
                            <MenuItem value="en">English</MenuItem>
                            <MenuItem value="ja">日本語</MenuItem>
                        </Select>
                    </FormControl>
                </ListItem>
                <Divider />
                <ListItem>
                    <FormControl variant="outlined" margin="none" sx={{ width: '100%' }}>
                        <InputLabel id="theme-select-label">{t('theme')}</InputLabel>
                        <Select
                            labelId="theme-select-label"
                            value={theme.palette.mode}
                            onChange={toggleTheme}
                            label={t('theme')}
                        >
                            <MenuItem value="light">Light</MenuItem>
                            <MenuItem value="dark">Dark</MenuItem>
                        </Select>
                    </FormControl>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="fixed" color="default" sx={{ backgroundColor: theme.palette.header.main }}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        calculator.com
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <FormControl variant="outlined" margin="none" sx={{ ml: 2, height: '40px' }}>
                            <InputLabel id="lang-select-label">{t('language')}</InputLabel>
                            <Select
                                labelId="lang-select-label"
                                value={lang}
                                onChange={(e) => {
                                    const newLang = e.target.value as string;
                                    setLang(newLang);
                                    i18n.changeLanguage(newLang);
                                }}
                                label={t('language')}
                                sx={{ height: '40px' }}
                            >
                                <MenuItem value="en">English</MenuItem>
                                <MenuItem value="ja">日本語</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="outlined" margin="none" sx={{ ml: 2, height: '40px' }}>
                            <InputLabel id="theme-select-label">{t('theme')}</InputLabel>
                            <Select
                                labelId="theme-select-label"
                                value={theme.palette.mode}
                                onChange={toggleTheme}
                                label={t('theme')}
                                sx={{ height: '40px' }}
                            >
                                <MenuItem value="light">Light</MenuItem>
                                <MenuItem value="dark">Dark</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="right"
                            open={drawerOpen}
                            onClose={toggleDrawer(false)}
                        >
                            {drawerContent}
                        </Drawer>
                    </Box>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};

export default Header;