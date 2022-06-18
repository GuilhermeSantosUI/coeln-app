import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Accordion from '../../../components/Accordion';
import {
  Aside,
  AsideTitle,
  MainContent,
  Section,
} from '../../../components/BasePage';
import Header from '../../../components/Header';
import Goback from '../../../components/Sidebar/Goback';
import { FlowSection } from '../../MainPage/styles';
import dataItemPlugin from './data-item-plugin';
import Note from './Note';
import Organizer from './Organizer';
import * as C from './styles';
import Type from './Type';

function ItemPlugins() {
  const { params } = useParams();

  const [switcher, setSwitcher] = useState<string>('Observações');

  useEffect(() => {
    if (params) setSwitcher(params);
  }, [params]);

  function handleGetValue(e: string) {
    setSwitcher(e);
  }

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

            <Accordion
              data={dataItemPlugin}
              handleGoTo={handleGetValue}
              comesFrom={params}
            />
          </Aside>

          <Section>
            {switcher === 'Observações' && <Note />}
            {switcher === 'Tipos' && <Type />}
            {switcher === 'Organizadores' && <Organizer />}
          </Section>
        </FlowSection>
      </MainContent>
    </C.Container>
  );
}

export default ItemPlugins;
