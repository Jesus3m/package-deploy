import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { createContext, FC } from 'react';
import GlobalStyles from './global';
import { Theme } from './schema';
import { ITheme } from './types';

export interface ThemeContextProps {
  theme: ITheme;
  changeTheme: (theme: ITheme['key']) => void;
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps,
);

export const ThemeProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const changeTheme = (theme: ITheme['key']) => {
    Theme.theme.key = theme;
  };

  return (
    <ThemeContext.Provider value={{ theme: Theme.theme, changeTheme }}>
      <GlobalStyles />
      <EmotionThemeProvider theme={Theme.theme}>
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};
