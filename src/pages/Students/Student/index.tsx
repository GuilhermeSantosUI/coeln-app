import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FiEdit3, FiSettings, FiTrash } from 'react-icons/fi';

import {
  Aside,
  AsideTitle,
  DropDownButton,
  DropDownItems,
  DropDownMenuContainer,
  DropDownTitle,
  MainContent,
  Section,
} from '../../../components/BasePage';

import Accordion from '../../../components/Accordion';
import Header from '../../../components/Header';
import OptionButton from '../../../components/OptionButton';
import Goback from '../../../components/Sidebar/Goback';

import ImgBeggar from '../../../assets/beggar-ilustration-one.png';

import { FlowSection } from '../../MainPage/styles';
import * as C from '../styles';
import dataStudent from './data-student';
import api from '../../../services/api';
import Modal from '../../../components/Modal';
import ConfirmationModal from '../../../components/Modal/Confirmation';
import useModal from '../../../hooks/modal';

function Student() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isShown, handleSwitch } = useModal();

  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState<any>();

  useEffect(() => {
    (async function handleGet() {
      const { data } = await api.get(`/alunos/${id}`);
      setUser(data);
    })();
  }, [id]);

  function handleGetValue(e: string) {
    navigate(`/main-page/${e.split(' ')[0]}`);
  }

  function handleRemoveStudant() {}

  return (
    <C.Container>
      <Header />

      <MainContent>
        <Goback />

        <FlowSection>
          <Section>
            <C.SectionContainer>
              <C.WallpaperContainer>
                <C.BeggarImage src={ImgBeggar} alt="imagem do pedinte" />

                <C.WallpaperSubtitle>Nome do projeto:</C.WallpaperSubtitle>
                <C.WallpaperTitle>{user?.nome_projeto}</C.WallpaperTitle>
              </C.WallpaperContainer>

              <C.StudantName>{user?.nome}</C.StudantName>
              <C.StudantAbout>
                {user?.curso.nome} | Turma do {user?.turma.nome}
              </C.StudantAbout>
            </C.SectionContainer>
          </Section>

          <Aside>
            <C.AsideHeader>
              <AsideTitle>
                Mais informações <br />
                sobre o aluno:
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

            <Accordion data={dataStudent} handleGoTo={handleGetValue} />
          </Aside>
        </FlowSection>
      </MainContent>

      <Modal
        isShown={isShown}
        hide={handleSwitch}
        modalContent={
          <ConfirmationModal
            onConfirm={handleRemoveStudant}
            onCancel={() => handleSwitch()}
            title="Tem certeza?"
            message="Ao continuar, você estará removendo o aluno. Sendo assim, não será possivel velo novamente."
          />
        }
      />
    </C.Container>
  );
}

export default Student;
