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
  colorStyle = 'plain',
  ...rest
}: ButtonProps) {
  return (
    <C.Container type="button" size={size} colorStyle={colorStyle} {...rest}>
      {loading ? (
        <>
          <C.Loader />
          <p>Carregando...</p>
        </>
      ) : (
        children
      )}
    </C.Container>
  );
}

export default Button;
