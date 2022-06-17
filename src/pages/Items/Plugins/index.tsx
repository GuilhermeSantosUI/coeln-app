import Accordion from '../../../components/Accordion';
import {
  Aside,
  AsideTitle,
  MainContent,
  Section,
} from '../../../components/BasePage';
import HeaderSection from '../../../components/BasePage/HeaderSection';
import Header from '../../../components/Header';
import Goback from '../../../components/Sidebar/Goback';
import { FlowSection } from '../../MainPage/styles';
import * as C from './styles';

function ItemPlugins() {
  return (
    <C.Container>
      <Header />

      <MainContent>
        <Goback />

        <FlowSection>
          <Aside style={{ borderLeft: '1px solid #f2f2f2' }}>
            <AsideTitle>
              Mais informações <br />
              para detalhação de items:
            </AsideTitle>

            <Accordion />
          </Aside>

          <Section>
            <HeaderSection
              title="Observações"
              subtitle="Coordenadoria de eletrônica"
            />
          </Section>
        </FlowSection>
      </MainContent>
    </C.Container>
  );
}

export default ItemPlugins;
