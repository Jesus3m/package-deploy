import { useContext } from 'react';
import { ThemeContext } from './context';

export const useTheme = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return {
    theme,
    changeTheme,
  };
};
