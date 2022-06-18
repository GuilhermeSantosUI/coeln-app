import { FiSettings } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Accordion from '../../../components/Accordion';
import {
  Aside,
  AsideTitle,
  MainContent,
  Section,
} from '../../../components/BasePage';
import Header from '../../../components/Header';
import OptionButton from '../../../components/OptionButton';
import Goback from '../../../components/Sidebar/Goback';
import dataItemPlugin from '../../Items/Plugins/data-item-plugin';
import { FlowSection } from '../../MainPage/styles';

import * as C from '../styles';

function Component() {
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
            <C.WallpaperContainer>
              <C.WallpaperSubtitle>Tipo:</C.WallpaperSubtitle>
              <C.WallpaperTitle>Capacitor</C.WallpaperTitle>
            </C.WallpaperContainer>

            <C.ComponentName>AZ762 220W</C.ComponentName>
            <C.ComponentAbout>Sem descrição</C.ComponentAbout>
          </Section>

          <Aside>
            <C.AsideHeader>
              <AsideTitle>
                Mais informações <br />
                sobre o componente:
              </AsideTitle>

              <OptionButton>
                <FiSettings size={20} color="#8C8C8C" />
              </OptionButton>
            </C.AsideHeader>

            <Accordion data={dataItemPlugin} handleGoTo={handleGetValue} />
          </Aside>
        </FlowSection>
      </MainContent>
    </C.Container>
  );
}

export default Component;
