import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Container, Box } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { Context } from './Context';

function App() {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const { theme } = useContext(Context);

  return (
    <MuiThemeProvider theme={theme}>
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
        <p className="read-the-docs">
          {t('click_logos')}
        </p>
      </Container>
    </MuiThemeProvider>
  );
}

export default App;