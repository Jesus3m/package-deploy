type TColorDefinition = {
  foreground: string;
  background: string;
};

type TColorState = {
  default: TColorDefinition;
  hover?: TColorDefinition;
  active?: TColorDefinition;
  disabled?: TColorDefinition;
};

type TSizeTokens = {
  sm: string;
  md: string;
  lg?: string;
  xl?: string;
  xxl?: string;
  xxxl?: string;
};

type TValue = {
  colors: {
    primary: TColorState;
    secondary: TColorState;
    muted?: TColorState;
    accent?: TColorState;
    warning?: TColorState;
    error?: TColorState;
    success?: TColorState;
    info?: TColorState;
  };
  border: TSizeTokens;
  spacing?: TSizeTokens;
  input?: {
    size: TSizeTokens;
    padding: TSizeTokens;
    color: TColorState;
  };
};

type ITheme = {
  key: 'light' | 'dark';
  value: TValue;
};

export type { ITheme, TValue };
