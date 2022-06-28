import { ButtonHTMLAttributes } from 'react';
import * as C from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  size?: 'larger' | 'medium' | 'small';
  colorStyle?: 'plain' | 'gray' | 'tined' | 'filled';
}

function Button({
  loading,
  children,
  size = 'small',
  colorStyle = 'tined',
  ...rest
}: ButtonProps) {
  return (
    <C.Container type="button" size={size} colorStyle={colorStyle} {...rest}>
      {children}
    </C.Container>
  );
}

export default Button;
