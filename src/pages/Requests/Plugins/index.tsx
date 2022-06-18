import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Accordion from '../../../components/Accordion';
import {
  Aside,
  AsideTitle,
  MainContent,
  Section,
} from '../../../components/BasePage';
import Course from './Course';
import Header from '../../../components/Header';
import Goback from '../../../components/Sidebar/Goback';
import { FlowSection } from '../../MainPage/styles';
import dataRequestPlugin from './data-request-plugin';
import * as C from './styles';
import Class from './Class';

function RequestPlugins() {
  const { params } = useParams();
  const [switcher, setSwitcher] = useState<string | undefined>('Cursos');

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
              data={dataRequestPlugin}
              handleGoTo={handleGetValue}
              comesFrom={params}
            />
          </Aside>

          <Section>
            {switcher === 'Cursos' && <Course />}
            {switcher === 'Turmas' && <Class />}
          </Section>
        </FlowSection>
      </MainContent>
    </C.Container>
  );
}

export default RequestPlugins;
