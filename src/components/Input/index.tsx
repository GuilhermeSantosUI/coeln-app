import { useField } from '@unform/core';
import { InputHTMLAttributes, useEffect, useRef } from 'react';
import * as C from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

function Input({ name, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, error, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => ref.current.value,
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <C.Container ref={inputRef} defaultValue={defaultValue} {...rest} />
      {error && <C.ErrorMessage>{error}</C.ErrorMessage>}
    </>
  );
}

export default Input;
