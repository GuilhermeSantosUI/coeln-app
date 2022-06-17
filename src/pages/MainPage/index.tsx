import { FiX } from 'react-icons/fi';

import Accordion from '../../components/Accordion';
import {
  Aside,
  AsideTitle,
  MainContent,
  Section,
} from '../../components/BasePage';
import Header from '../../components/Header';
import OptionButton from '../../components/OptionButton';
import Sidebar from '../../components/Sidebar';
import { useToggle } from '../../hooks/sideToggle';
import Items from '../Items';
import Requests from '../Requests';
import * as C from './styles';

function MainPage() {
  const { toggle, openSide, setOpenSide } = useToggle();

  return (
    <C.Container>
      <Header />

      <MainContent>
        <Sidebar />

        <C.FlowSection>
          <Section>{toggle ? <Requests /> : <Items />}</Section>

          <Aside>
            <AsideTitle>
              Expiraram da <br />
              data de devolução:
            </AsideTitle>

            <Accordion />
          </Aside>
        </C.FlowSection>
      </MainContent>

      {openSide && (
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
      )}
    </C.Container>
  );
}

export default MainPage;
