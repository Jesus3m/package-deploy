import styled from '@emotion/styled';
import { TValue } from '../../../theme/types';

export const ButtonBase = styled.button<{
  border: keyof TValue['border'];
  variant: keyof TValue['colors'];
}>`
  border-radius: ${({ theme, border }) => theme.value.border[border]};
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: ${({ theme, variant }) =>
    theme.value.colors[variant]?.default.background};
  cursor: pointer;
  transition: border-color 0.25s;
  color: ${({ theme, variant }) =>
    theme.value.colors[variant]?.default.foreground};
  &:hover {
    background-color: ${({ theme, variant }) =>
      theme.value.colors[variant]?.hover?.background};
    border-color: ${({ theme, variant }) =>
      theme.value.colors[variant]?.hover?.foreground};
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
    background-color: ${({ theme, variant }) =>
      theme.value.colors[variant]?.active?.background};
  }
`;
