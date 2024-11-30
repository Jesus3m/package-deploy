import { useContext } from 'react';
import { ThemeContext } from './context';

export const useTheme = () => {
  const { theme, changeTheme, setTheme } = useContext(ThemeContext);

  return {
    theme,
    changeTheme,
    setTheme
  };
};
