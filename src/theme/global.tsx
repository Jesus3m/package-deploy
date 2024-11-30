/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={(theme: any) => css`
      * {
        font-family: 'Inter', sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scrollbar-width: none;
      }

      body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      button {
        font-weight: 600 !important;
      }

      div {
        font-weight: 500 !important;
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }
    `}
  />
);

export default GlobalStyles;
