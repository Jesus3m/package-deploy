import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { createContext, FC, useState } from 'react';
import GlobalStyles from './global';
import { Theme } from './schema';
import { ITheme } from './types';

export interface ThemeContextProps {
  theme: ITheme;
  changeTheme: (theme: ITheme['key']) => void;
  setTheme: (theme: ITheme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps,
);

export const ThemeProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setThemeValues] = useState(Theme.theme);
  const changeTheme = (theme: ITheme['key']) => {
    Theme.theme.key = theme;
  };

  const setTheme = (theme: ITheme) => {
    setThemeValues(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme, setTheme }}>
      <GlobalStyles />
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};
