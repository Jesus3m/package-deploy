import { ITheme } from './types';

export class Theme {
  static theme: ITheme = {
    key: 'light',
    value: {
      colors: {
        muted: {
          default: {
            foreground: '#000000',
            background: '#f7f7f7',
          },
        },
        primary: {
          default: {
            foreground: '#fff',
            background: '#dbe5ff',
          },
          hover: {
            foreground: '#fff',
            background: '#8eacfa',
          },
          active: {
            foreground: '#000000',
            background: '#18f7F9',
          },
          disabled: {
            foreground: '#000000',
            background: '#1277c2',
          },
        },
        secondary: {
          default: {
            background: '#7c9ffc',
            foreground: '#ffffff',
          },
          active: {
            background: '#7c9ffc',
            foreground: '#ffffff',
          },
        },
        info: {
          default: {
            background: '#dae1eb',
            foreground: '#1277c2',
          },
          hover: {
            background: '#a7c6f1',
            foreground: '#dae1eb',
          },
        },
      },
      border: {
        sm: '8px',
        md: '16px',
        lg: '24px',
      },
    },
  };
}
