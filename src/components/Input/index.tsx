import { useField } from '@unform/core';
import { InputHTMLAttributes, useEffect, useRef } from 'react';
import * as C from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

function Input({ name, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return <C.Container ref={inputRef} defaultValue={defaultValue} {...rest} />;
}

export default Input;
