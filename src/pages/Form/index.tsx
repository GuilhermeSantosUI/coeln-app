import { useNavigate } from 'react-router-dom';
import { Separator } from '../../components/BasePage';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { FloatingFooter } from '../Sign/styles';
import * as C from './styles';

function Form() {
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.WallPaper>
        <Separator>
          <C.Title>Vamos organizar este item, pra já!</C.Title>
          <br />
          <C.Subtitle>
            Manter os items organizados em seus <br /> devidos laboratórios é
            essencial!
          </C.Subtitle>
        </Separator>

        <C.FormContainer>
          <Input name="gu" placeholder="Teste de cadastro" />

          <Input name="gu" placeholder="Teste de cadastro" />

          <Button loading={false} colorStyle="filled" size="larger">
            Salvar
          </Button>
        </C.FormContainer>
      </C.WallPaper>

      <FloatingFooter>
        <Button
          loading={false}
          size="medium"
          colorStyle="filled"
          onClick={() => navigate(-1)}>
          Voltar
        </Button>

        <Button loading={false} size="medium" colorStyle="tined">
          (Criar/Editar) Componente
        </Button>
      </FloatingFooter>
    </C.Container>
  );
}

export default Form;
