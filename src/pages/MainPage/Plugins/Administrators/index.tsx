import { FiX } from 'react-icons/fi';
import OptionButton from '../../../../components/OptionButton';
import { useToggle } from '../../../../hooks/sideToggle';
import * as C from '../styles';

function Administrators() {
  const { setOpenSide } = useToggle();
  return (
    <C.AdminSidebarContainer>
      <C.AdminSidebar>
        <C.AdminHeader>
          <C.AdminTitle>
            Listagem de <br />
            Adimnistradores
          </C.AdminTitle>

          <OptionButton onClick={() => setOpenSide(false)}>
            <FiX size={20} color="#8C8C8C" />
          </OptionButton>
        </C.AdminHeader>

        <C.AdminListContent>
          <p>Lista de admnistradores</p>
        </C.AdminListContent>

        <C.AdminSidebarFooter>
          Os servidores só podem ser adicionados/excluídos pelo dono do
          servidor.
        </C.AdminSidebarFooter>
      </C.AdminSidebar>
    </C.AdminSidebarContainer>
  );
}

export default Administrators;
