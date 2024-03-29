import { useEffect, useState } from 'react';
import { FiEdit3, FiMinus, FiSettings, FiTrash } from 'react-icons/fi';
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
import Modal from '../../../components/Modal';
import ConfirmationModal from '../../../components/Modal/Confirmation';
import OptionButton from '../../../components/OptionButton';
import Goback from '../../../components/Sidebar/Goback';
import useModal from '../../../hooks/modal';
import api from '../../../services/api';
import { FlowSection } from '../../MainPage/styles';

import * as C from '../styles';

function Component() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isShown, handleSwitch } = useModal();

  const [component, setComponent] = useState<any>();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    (async function handleGet() {
      const { data } = await api.get(`/componentes/${id}`);
      setComponent(data);
    })();
  }, [id]);

  function handleGetValue() {
    navigate(`/item/plugins/Observações`);
  }

  function handleRemoveComponent() {}

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

              <DropDownMenuContainer>
                <OptionButton onClick={() => setToggle(!toggle)}>
                  <FiSettings size={20} color="#8C8C8C" />
                </OptionButton>

                <DropDownItems show={toggle}>
                  <DropDownButton>
                    <FiEdit3 size={20} color="#000000" />
                    <DropDownTitle>Editar</DropDownTitle>
                  </DropDownButton>

                  <DropDownButton onClick={handleSwitch}>
                    <FiTrash size={20} color="#000000" />
                    <DropDownTitle>Deletar</DropDownTitle>
                  </DropDownButton>
                </DropDownItems>
              </DropDownMenuContainer>
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
                  {component?.observacoes.length !== 0 ? (
                    component?.observacoes.map((note: any) => (
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
                  onClick={handleGetValue}>
                  Ir para observações
                </Button>
              </ContentSection>
            </AccordionContainer>
          </Aside>
        </FlowSection>
      </MainContent>

      <Modal
        isShown={isShown}
        hide={handleSwitch}
        modalContent={
          <ConfirmationModal
            onConfirm={handleRemoveComponent}
            onCancel={() => handleSwitch()}
            title="Tem certeza?"
            message="Ao continuar, você estará removendo o componente. Sendo assim, não será possivel velo novamente."
          />
        }
      />
    </C.Container>
  );
}

export default Component;
