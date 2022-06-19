import { useEffect, useState } from 'react';
import { FiEdit3, FiMinus, FiPlus, FiSettings, FiTrash } from 'react-icons/fi';
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
  DropDownButton,
  DropDownItems,
  DropDownMenuContainer,
  DropDownTitle,
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

function Item() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState<any>();
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState<string>('Observações');

  useEffect(() => {
    (async function handleGet() {
      const { data } = await api.get(`/itens/${id}`);
      setItem(data);
    })();
  }, [id]);

  function handleGoToNotes() {
    navigate(`/item/plugins/Observações`);
  }

  function handleGoToOrganizers() {
    navigate(`/item/plugins/Organizadores`);
  }

  function handleToggle(pluginId: string) {
    setSelected(pluginId);
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
              <C.WallpaperTitle>{item?.componente.tipo.nome}</C.WallpaperTitle>
            </C.WallpaperContainer>

            <C.ComponentName>{item?.componente.nome}</C.ComponentName>
            <C.ComponentAbout>
              {item?.componente.descricao !== '--'
                ? item?.componente.descricao
                : 'Sem descricao'}
            </C.ComponentAbout>
          </Section>

          <Aside>
            <C.AsideHeader>
              <AsideTitle>
                Mais informações <br />
                sobre o item:
              </AsideTitle>

              <DropDownMenuContainer>
                <OptionButton onClick={() => setToggle(!toggle)}>
                  <FiSettings size={20} color="#8C8C8C" />
                </OptionButton>

                <DropDownItems show={toggle}>
                  <DropDownButton>
                    <FiEdit3 size={20} color="#000000" />
                    <DropDownTitle>Editar</DropDownTitle>
                  </DropDownButton>

                  <DropDownButton>
                    <FiTrash size={20} color="#000000" />
                    <DropDownTitle>Deletar</DropDownTitle>
                  </DropDownButton>
                </DropDownItems>
              </DropDownMenuContainer>
            </C.AsideHeader>

            <AccordionContainer>
              <AccordionHeaderSection
                onClick={() => handleToggle('Observações')}
                unselected={selected !== 'Observações'}>
                <HeaderSectionTitle>Observações</HeaderSectionTitle>

                <FiMinus size={24} color="#e6f3ef" />
              </AccordionHeaderSection>

              {selected === 'Observações' && (
                <ContentSection>
                  <Separator style={{ width: '100%' }}>
                    {item?.componente.observacoes.length !== 0 ? (
                      item?.componente?.observacoes.map((note: any) => (
                        <C.NoteContainer key={note?.id}>
                          <Subtitle>Observação:</Subtitle>
                          <Title>{note?.texto}</Title>
                        </C.NoteContainer>
                      ))
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
                    onClick={handleGoToNotes}>
                    Ir para observações
                  </Button>
                </ContentSection>
              )}

              <AccordionHeaderSection
                onClick={() => handleToggle('Organizador')}
                unselected={selected !== 'Organizador'}>
                <HeaderSectionTitle>Organizador</HeaderSectionTitle>
                {selected === 'Organizador' ? (
                  <FiMinus size={24} color="#e6f3ef" />
                ) : (
                  <FiPlus size={24} color="#328827" />
                )}{' '}
              </AccordionHeaderSection>

              {selected === 'Organizador' && (
                <ContentSection>
                  <Separator style={{ width: '100%' }}>
                    <C.NoteContainer>
                      <Subtitle>Organizador: {item?.organizador.id}</Subtitle>
                      <Title>
                        Laboratório: {item?.organizador.laboratorio.id}
                      </Title>
                    </C.NoteContainer>
                  </Separator>

                  <Button
                    loading={false}
                    colorStyle="tined"
                    size="small"
                    onClick={handleGoToOrganizers}>
                    Ir para organizadores
                  </Button>
                </ContentSection>
              )}
            </AccordionContainer>
          </Aside>
        </FlowSection>
      </MainContent>
    </C.Container>
  );
}

export default Item;
