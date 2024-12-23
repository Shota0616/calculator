import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import './i18n';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import { ContextProvider } from './Context';
import RoutesConfig from './routes/Routes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Header />
        <RoutesConfig />
      </ContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
