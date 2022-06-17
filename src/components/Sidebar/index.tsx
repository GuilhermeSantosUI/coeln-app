import { FiCalendar, FiCpu, FiHelpCircle } from 'react-icons/fi';
import { useToggle } from '../../hooks/sideToggle';
import * as C from './styles';

function Sidebar() {
  const { setToggle, setOpenSide } = useToggle();

  return (
    <C.Container>
      <C.NavButton to="" onClick={() => setToggle(false)}>
        <C.NavIconContainer>
          <FiCpu size={20} color="#328827" />
        </C.NavIconContainer>

        <C.NavTitle>Items</C.NavTitle>
      </C.NavButton>

      <C.NavButton to="" onClick={() => setToggle(true)}>
        <C.NavIconContainer>
          <FiCalendar size={20} color="#328827" />
        </C.NavIconContainer>

        <C.NavTitle>Pedidos</C.NavTitle>
      </C.NavButton>

      <C.NavButton to="" onClick={() => setOpenSide(true)}>
        <C.NavIconContainer>
          <FiHelpCircle size={20} color="#328827" />
        </C.NavIconContainer>

        <C.NavTitle>Adms</C.NavTitle>
      </C.NavButton>
    </C.Container>
  );
}

export default Sidebar;
