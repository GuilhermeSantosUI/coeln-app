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

function Components() {
  return (
    <C.Container>
      <Header />

      <MainContent>
        <Goback />

        <FlowSection>
          <Section>
            <HeaderSection
              title="Componentes"
              subtitle="Coordenadoria de eletrônica"
            />
          </Section>

          <Aside>
            <AsideTitle>
              Mais informações <br />
              para detalhação de items:
            </AsideTitle>

            <Accordion />
          </Aside>
        </FlowSection>
      </MainContent>
    </C.Container>
  );
}

export default Components;
