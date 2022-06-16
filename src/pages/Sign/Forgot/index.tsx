import { FormEvent, useState } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import * as C from '../styles';

function Forgot() {
  const [email, setEmail] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      console.log(`Um email foi enviado para: ${email} `);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <C.Content>
      <C.ContentSection>
        <C.ContentTitle>
          Ops! Aparentemente você <br />
          esqueceu sua senha.
        </C.ContentTitle>
        <C.ContentSubtitle>
          Não se preocupe, basta iserir seu email para <br />
          atualizar resgatar sua senha.
        </C.ContentSubtitle>
      </C.ContentSection>

      <C.ContentForm onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button loading={false} type="submit" size="larger" colorStyle="filled">
          Recuperar
        </Button>
      </C.ContentForm>
    </C.Content>
  );
}

export default Forgot;
