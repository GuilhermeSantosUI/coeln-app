import {
  Aside,
  AsideTitle,
  MainContent,
  Section,
} from '../../../components/BasePage';

import Header from '../../../components/Header';
import Goback from '../../../components/Sidebar/Goback';

import ImgBeggar from '../../../assets/beggar-ilustration.png';

import * as C from '../styles';
import HeaderSection from '../../../components/BasePage/HeaderSection';
import { FlowSection } from '../../MainPage/styles';

function Request() {
  return (
    <C.Container>
      <Header />

      <MainContent>
        <Goback />

        <FlowSection>
          <Aside style={{ borderLeft: '1px solid #f2f2f2' }}>
            <AsideTitle>
              Mais informações <br />
              sobre o pedido do aluno:
            </AsideTitle>

            <C.BeggarContainer>
              <C.BeggarTitle>Aluno</C.BeggarTitle>
              <C.SpanName>Nome do aluno:</C.SpanName>
              <C.BeggarName>Guilherme Santos</C.BeggarName>
              <C.Registration>Matricula: 2019301932</C.Registration>

              <C.BeggarImage src={ImgBeggar} alt="imagem do pedinte" />
            </C.BeggarContainer>

            <C.PeriodContainer>
              <C.PeriodHeader>
                <C.PeriodTitle>Periodo (2 semanas)</C.PeriodTitle>
              </C.PeriodHeader>

              <C.PeriodDates>
                <C.DateContainer>
                  <C.DateTitle>
                    Data de <br />
                    entrega:
                  </C.DateTitle>
                </C.DateContainer>
                <C.DateContainer>
                  <C.DateTitle>
                    Data de <br />
                    devolução:
                  </C.DateTitle>
                </C.DateContainer>
              </C.PeriodDates>
            </C.PeriodContainer>
          </Aside>

          <Section style={{ borderRight: 0 }}>
            <HeaderSection
              title="Componentes"
              subtitle="Lista de items requisitados"
            />
          </Section>
        </FlowSection>
      </MainContent>
    </C.Container>
  );
}

export default Request;
