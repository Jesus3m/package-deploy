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
            background: '#1877F2',
          },
          hover: {
            foreground: '#fff',
            background: '#1111c2',
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
            background: '#d21e1e',
            foreground: '#ffffff',
          },
          active: {
            background: '#f18181',
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
