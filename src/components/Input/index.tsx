import { InputHTMLAttributes, useRef } from 'react';
import * as C from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

function Input({ name, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return <C.Container ref={inputRef} {...rest} />;
}

export default Input;
