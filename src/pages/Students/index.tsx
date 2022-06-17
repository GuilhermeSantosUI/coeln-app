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

import * as C from './styles';

function Students() {
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
          </Section>

          <Aside>
            <AsideTitle>
              Mais informações para <br />
              detalhação de pedidos:
            </AsideTitle>

            <Accordion />
          </Aside>
        </FlowSection>
      </MainContent>
    </C.Container>
  );
}

export default Students;
