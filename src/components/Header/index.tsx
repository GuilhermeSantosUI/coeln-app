import { FiMenu, FiPower } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Separator } from '../BasePage';
import OptionButton from '../OptionButton';
import * as C from './styles';

function Header() {
  const navigate = useNavigate();

  async function handleSignOut() {
    localStorage.removeItem('user');
    navigate('/login');
  }

  return (
    <C.Container>
      <C.HeaderLeftSide>
        <FiMenu size={24} color="#D9D9D9" />

        <Separator>
          <C.Logo>COELN</C.Logo>
          <C.Subtitle>Coordenadoria de eletrônica</C.Subtitle>
        </Separator>
      </C.HeaderLeftSide>

      <C.HeaderLeftSide>
        <Separator>
          <C.Subtitle>Bem vindo novamente,</C.Subtitle>
          <C.Username>Guilherme Santos</C.Username>
        </Separator>

        <OptionButton onClick={handleSignOut}>
          <FiPower size={20} color="#8C8C8C" />
        </OptionButton>
      </C.HeaderLeftSide>
    </C.Container>
  );
}

export default Header;
