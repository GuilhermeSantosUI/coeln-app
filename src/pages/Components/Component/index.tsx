import { useEffect, useState } from 'react';
import { FiMinus, FiSettings } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';
import {
  AccordionContainer,
  AccordionHeaderSection,
  ContentSection,
  HeaderSectionTitle,
} from '../../../components/Accordion/styles';
import {
  Aside,
  AsideTitle,
  MainContent,
  Section,
  Separator,
} from '../../../components/BasePage';
import { Subtitle, Title } from '../../../components/BasePage/ListComponents';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import OptionButton from '../../../components/OptionButton';
import Goback from '../../../components/Sidebar/Goback';
import api from '../../../services/api';
import { FlowSection } from '../../MainPage/styles';

import * as C from '../styles';

function Component() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [component, setComponent] = useState<any>();

  useEffect(() => {
    (async function handleGet() {
      const { data } = await api.get(`/componentes/${id}`);
      setComponent(data);
    })();
  }, [id]);

  function handleGetValue() {
    navigate(`/item/plugins/Observações`);
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
              <C.WallpaperTitle>{component?.tipo.nome}</C.WallpaperTitle>
            </C.WallpaperContainer>

            <C.ComponentName>{component?.nome}</C.ComponentName>
            <C.ComponentAbout>
              {component?.descricao !== '--'
                ? component?.descricao
                : 'Sem descricao'}
            </C.ComponentAbout>
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

            <AccordionContainer>
              <AccordionHeaderSection
                unselected={false}
                style={{ cursor: 'default' }}>
                <HeaderSectionTitle>Observações</HeaderSectionTitle>

                <FiMinus size={24} color="#e6f3ef" />
              </AccordionHeaderSection>

              <ContentSection>
                <Separator style={{ width: '100%' }}>
                  {component.observacoes.length !== 0 ? (
                    <div>
                      {component?.observacoes.map((note: any) => (
                        <C.NoteContainer key={note?.id}>
                          <Subtitle>Observação:</Subtitle>
                          <Title>{note?.texto}</Title>
                        </C.NoteContainer>
                      ))}
                    </div>
                  ) : (
                    <C.NoteContainer>
                      <Title>Não há observações!</Title>
                    </C.NoteContainer>
                  )}
                </Separator>

                <Button
                  loading={false}
                  colorStyle="tined"
                  size="small"
                  onClick={handleGetValue}>
                  Ir para observações
                </Button>
              </ContentSection>
            </AccordionContainer>
          </Aside>
        </FlowSection>
      </MainContent>
    </C.Container>
  );
}

export default Component;
