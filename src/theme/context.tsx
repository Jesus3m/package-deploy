import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { createContext, FC } from 'react';
import GlobalStyles from './global';
import { Theme } from './schema';
import { ITheme } from './types';

export interface ThemeContextProps {
  theme: ITheme;
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps,
);

export const ThemeProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeContext.Provider value={{ theme: Theme.theme }}>
      <GlobalStyles />
      <EmotionThemeProvider theme={Theme.theme}>
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};
