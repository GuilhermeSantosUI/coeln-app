import { useNavigate } from 'react-router-dom';
import Accordion from '../../components/Accordion';
import {
  Aside,
  AsideTitle,
  MainContent,
  Section,
} from '../../components/BasePage';
import HeaderSection from '../../components/BasePage/HeaderSection';
import Header from '../../components/Header';
import Goback from '../../components/Sidebar/Goback';
import { FlowSection } from '../MainPage/styles';
import dataRequestPlugin from '../Requests/Plugins/data-request-plugin';

import * as C from './styles';

function Students() {
  const navigate = useNavigate();

  function handleGetValue(e: string) {
    navigate(`/request/plugins/${e}`);
  }

  return (
    <C.Container>
      <Header />

      <MainContent>
        <Goback />

        <FlowSection>
          <Section>
            <HeaderSection
              title="Alunos"
              subtitle="Lista de items requisitados"
            />

            <C.FakeListItem onClick={() => navigate('/student')} />
          </Section>

          <Aside>
            <AsideTitle>
              Mais informações para <br />
              detalhação de pedidos:
            </AsideTitle>

            <Accordion data={dataRequestPlugin} handleGoTo={handleGetValue} />
          </Aside>
        </FlowSection>
      </MainContent>
    </C.Container>
  );
}

export default Students;
