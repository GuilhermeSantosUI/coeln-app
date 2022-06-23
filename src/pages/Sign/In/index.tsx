import { FormHandles } from '@unform/core';
import { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import * as C from '../styles';

interface SignInProps {
  email: string;
  password: string;
}

function In() {
  const formRef = useRef<FormHandles>(null);
  const navigate = useNavigate();

  const handleSubmit = useCallback(async (data: SignInProps) => {
    try {
      console.log(data);
      localStorage.setItem('user', 'user');
      navigate('/main-page');
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <C.Content>
      <C.ContentSection>
        <C.ContentTitle>
          Vamos fazer login <br />
          bem-vindo de volta.
        </C.ContentTitle>
        <C.ContentSubtitle>
          Caso nao se lembre da senha clique no botao de <br />
          recuperar senha abaixo.
        </C.ContentSubtitle>
      </C.ContentSection>

      <C.ContentForm ref={formRef} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Email ou matricula" />
        <Input name="password" type="password" placeholder="Senha" />

        <Button loading={false} type="submit" size="larger" colorStyle="filled">
          Entrar
        </Button>
      </C.ContentForm>
    </C.Content>
  );
}

export default In;
