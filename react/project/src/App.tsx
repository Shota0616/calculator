import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { APP_LANG, UI_MODE } from './config';
import { MenuItem, Select, FormControl, InputLabel, Container, Box } from '@mui/material';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';

// ライトテーマとダークテーマの作成
const lightTheme = createTheme({
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

const darkTheme = createTheme({
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

function App() {
  const { t, i18n } = useTranslation();
  const [count, setCount] = useState(0);
  const [lang, setLang] = useState(APP_LANG);
  const [theme, setTheme] = useState(UI_MODE);

  // テーマの選択
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  const handleLangChange = (e: SelectChangeEvent) => {
    const newLang = e.target.value as string;
    setLang(newLang);
    i18n.changeLanguage(newLang);
  };

  const handleThemeChange = (e: SelectChangeEvent) => {
    setTheme(e.target.value as string);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Container>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>{t('welcome')}</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p dangerouslySetInnerHTML={{ __html: t('edit_and_save') }} />
        </div>
        <FormControl variant="outlined" margin="normal">
          <InputLabel id="lang-select-label">{t('language')}</InputLabel>
          <Select
            labelId="lang-select-label"
            value={lang}
            onChange={handleLangChange}
            label={t('language')}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="ja">日本語</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" margin="normal">
          <InputLabel id="theme-select-label">{t('theme')}</InputLabel>
          <Select
            labelId="theme-select-label"
            value={theme}
            onChange={handleThemeChange}
            label={t('theme')}
          >
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
          </Select>
        </FormControl>
        <p className="read-the-docs">
          {t('click_logos')}
        </p>
      </Container>
    </ThemeProvider>
  );
}

export default App;
