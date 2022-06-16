import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import * as C from '../styles';

function In() {
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      localStorage.setItem('user', 'user');
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <C.Content>
      <C.ContentSection>
        <C.ContentTitle>
          Vamos fazer login, bem-vindo <br />
          de volta. você foi perdido.
        </C.ContentTitle>
        <C.ContentSubtitle>
          Caso nao se lembre da senha clique no botao de <br />
          recuperar senha abaixo.
        </C.ContentSubtitle>
      </C.ContentSection>

      <C.ContentForm onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Email ou matricula" />
        <Input name="password" type="password" placeholder="Senha" />

        <Button loading={false} type="submit" size="larger" colorStyle="filled">
          Recuperar senha
        </Button>
      </C.ContentForm>
    </C.Content>
  );
}

export default In;
