import { FiSettings } from 'react-icons/fi';

import {
  Aside,
  AsideTitle,
  MainContent,
  Section,
} from '../../../components/BasePage';

import Accordion from '../../../components/Accordion';
import Header from '../../../components/Header';
import Goback from '../../../components/Sidebar/Goback';
import OptionButton from '../../../components/OptionButton';

import ImgBeggar from '../../../assets/beggar-ilustration.png';

import * as C from '../styles';
import { FlowSection } from '../../MainPage/styles';

function Student() {
  return (
    <C.Container>
      <Header />

      <MainContent>
        <Goback />

        <FlowSection>
          <Section>
            <C.WallpaperContainer>
              <C.BeggarImage src={ImgBeggar} alt="imagem do pedinte" />

              <C.WallpaperSubtitle>Nome do projeto:</C.WallpaperSubtitle>
              <C.WallpaperTitle>
                Trabalho de conclusão do 3 bimestre
              </C.WallpaperTitle>
            </C.WallpaperContainer>

            <C.StudantName>Guilherme Santos</C.StudantName>
            <C.StudantAbout>IINF | Turma do 3º periodo</C.StudantAbout>
          </Section>

          <Aside>
            <C.AsideHeader>
              <AsideTitle>
                Mais informações <br />
                sobre o aluno:
              </AsideTitle>

              <OptionButton>
                <FiSettings size={20} color="#8C8C8C" />
              </OptionButton>
            </C.AsideHeader>

            <Accordion />
          </Aside>
        </FlowSection>
      </MainContent>
    </C.Container>
  );
}

export default Student;
