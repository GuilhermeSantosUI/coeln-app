import { FiMenu, FiPower } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import useModal from '../../hooks/modal';
import { Separator } from '../BasePage';
import Modal from '../Modal';
import ConfirmationModal from '../Modal/Confirmation';
import OptionButton from '../OptionButton';
import * as C from './styles';

function Header() {
  const navigate = useNavigate();
  const { isShown, handleToggle } = useModal();

  async function handleSignOut() {
    localStorage.removeItem('user');
    handleToggle();
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

        <OptionButton onClick={handleToggle}>
          <FiPower size={20} color="#8C8C8C" />
        </OptionButton>
      </C.HeaderLeftSide>

      <Modal
        isShown={isShown}
        hide={handleToggle}
        headerText="Confirmation"
        modalContent={
          <ConfirmationModal
            onConfirm={handleSignOut}
            onCancel={() => handleToggle()}
            message="Are you sure you want to delete element?"
          />
        }
      />
    </C.Container>
  );
}

export default Header;
