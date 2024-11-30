import '@emotion/react';
import type { ITheme } from '../theme/types';

// You are also able to use a 3rd party theme this way:
import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}
