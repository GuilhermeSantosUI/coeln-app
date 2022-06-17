import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as C from './styles';

interface OptionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function OptionButton({ children, ...rest }: OptionButtonProps) {
  return <C.Container {...rest}>{children}</C.Container>;
}
export default OptionButton;
