import { useNavigate } from 'react-router-dom';
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
import Accordion from '../../components/Accordion';
import * as C from './styles';
import dataItemPlugin from '../Items/Plugins/data-item-plugin';

function Components() {
  const navigate = useNavigate();

  function handleGetValue(e: string) {
    navigate(`/item/plugins/${e}`);
  }

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

            <Accordion data={dataItemPlugin} handleGoTo={handleGetValue} />
          </Aside>
        </FlowSection>
      </MainContent>
    </C.Container>
  );
}

export default Components;
