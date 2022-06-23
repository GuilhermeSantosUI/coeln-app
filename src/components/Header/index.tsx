import { ButtonHTMLAttributes } from 'react';
import { FiMenu, FiPower } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import useModal from '../../hooks/modal';
import { Separator } from '../BasePage';
import Modal from '../Modal';
import ConfirmationModal from '../Modal/Confirmation';
import OptionButton from '../OptionButton';
import * as C from './styles';

interface HeaderProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Header({ ...rest }: HeaderProps) {
  const navigate = useNavigate();
  const { isShown, handleSwitch } = useModal();

  async function handleSignOut() {
    localStorage.removeItem('user');
    handleSwitch();
    navigate('/login');
  }

  return (
    <C.Container>
      <C.HeaderLeftSide>
        <C.TouchArea {...rest}>
          <FiMenu size={24} color="#D9D9D9" />
        </C.TouchArea>

        <Separator>
          <C.Logo>COELN</C.Logo>
          <C.Subtitle>Coordenadoria de eletrônica</C.Subtitle>
        </Separator>
      </C.HeaderLeftSide>

      <C.HeaderRightSide>
        <Separator>
          <C.Subtitle>Bem vindo novamente,</C.Subtitle>
          <C.Username>Guilherme Santos</C.Username>
        </Separator>

        <OptionButton onClick={handleSwitch}>
          <FiPower size={20} color="#8C8C8C" />
        </OptionButton>
      </C.HeaderRightSide>

      <Modal
        isShown={isShown}
        hide={handleSwitch}
        modalContent={
          <ConfirmationModal
            onConfirm={handleSignOut}
            onCancel={() => handleSwitch()}
            title="Deseja sair?"
            message="Ao continuar, você será deslogado da aplicação! Apartir daí você terá que se logar novamente pela pagina de login."
          />
        }
      />
    </C.Container>
  );
}

export default Header;
