import { ButtonHTMLAttributes } from 'react';
import * as C from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
  size: 'larger' | 'medium' | 'small';
  colorStyle: 'plain' | 'gray' | 'tined' | 'filled';
}

function Button({ loading, children, size, colorStyle, ...rest }: ButtonProps) {
  return (
    <C.Container type="button" size={size} colorStyle={colorStyle} {...rest}>
      {children}
    </C.Container>
  );
}

export default Button;
