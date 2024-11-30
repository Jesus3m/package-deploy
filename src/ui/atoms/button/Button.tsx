import React from 'react';
import { TValue } from '../../../theme/types';
import { ButtonBase } from './styles';

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  variant?: keyof TValue['colors'];
  /** What radius size to use */
  border?: keyof TValue['border'];
  /** Button contents */
  children: React.ReactNode | React.ReactNode[];
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  variant = 'primary',
  border = 'sm',
  children,
  ...props
}: ButtonProps) => {
  return (
    <ButtonBase type="button" variant={variant} border={border} {...props}>
      {children}
    </ButtonBase>
  );
};
