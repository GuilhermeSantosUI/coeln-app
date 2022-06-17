import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import * as C from '../styles';

function Goback() {
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.NavButton to="" onClick={() => navigate(-1)}>
        <C.NavIconContainer>
          <FiArrowLeft size={20} color="#328827" />
        </C.NavIconContainer>

        <C.NavTitle>Voltar</C.NavTitle>
      </C.NavButton>
    </C.Container>
  );
}

export default Goback;
