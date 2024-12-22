// react/project/src/Context.tsx
import React, { createContext, useState, ReactNode } from 'react';
import { lightTheme, darkTheme } from './theme';

interface ContextProps {
    theme: any;
    toggleTheme: () => void;
    lang: string;
    setLang: (lang: string) => void;
}

export const Context = createContext<ContextProps | undefined>(undefined);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState(lightTheme);
    const [lang, setLang] = useState('en');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme.palette.mode === 'light' ? darkTheme : lightTheme));
    };

    return (
        <Context.Provider value={{ theme, toggleTheme, lang, setLang }}>
        {children}
        </Context.Provider>
    );
};