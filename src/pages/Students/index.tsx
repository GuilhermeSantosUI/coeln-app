import { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Accordion from '../../components/Accordion';
import {
  Aside,
  AsideTitle,
  MainContent,
  Section,
  Separator,
} from '../../components/BasePage';
import HeaderSection from '../../components/BasePage/HeaderSection';
import {
  AvatarContainer,
  ListContainer,
  RightSeparator,
  Subtitle,
  Title,
} from '../../components/BasePage/ListComponents';
import Button from '../../components/Button';
import Header from '../../components/Header';
import handleRandomAvatar from '../../components/RandomImage';
import Goback from '../../components/Sidebar/Goback';
import api from '../../services/api';
import { FlowSection } from '../MainPage/styles';
import dataRequestPlugin from '../Requests/Plugins/data-request-plugin';

import * as C from './styles';

function Students() {
  const navigate = useNavigate();
  const [students, setStudents] = useState<any[]>([]);

  useEffect(() => {
    (async function handleGet() {
      const { data } = await api.get('/alunos');
      setStudents(data);
    })();
  }, []);

  function handleGetValue(e: string) {
    navigate(`/request/plugins/${e}`);
  }

  return (
    <C.Container>
      <Header />

      <MainContent>
        <Goback />

        <FlowSection>
          <Section>
            <HeaderSection
              title="Alunos"
              subtitle="Lista de items requisitados"
            />

            {students.map((student) => (
              <ListContainer
                key={student?.matricula}
                onClick={() => navigate(`/student/${student?.matricula}`)}>
                <AvatarContainer>
                  {handleRandomAvatar()}

                  <Separator>
                    <Subtitle>Matricula: {student?.matricula}</Subtitle>
                    <Title>{student.nome}</Title>
                  </Separator>
                </AvatarContainer>

                <RightSeparator>
                  <Button loading={false} colorStyle="tined" size="small">
                    {student?.turma.nome}
                  </Button>

                  <FiArrowRight size={20} color="#8c8c8c" />

                  <Button loading={false} colorStyle="filled" size="small">
                    {student?.curso.nome}
                  </Button>
                </RightSeparator>
              </ListContainer>
            ))}
          </Section>

          <Aside>
            <AsideTitle>
              Mais informações para <br />
              detalhação de pedidos:
            </AsideTitle>

            <Accordion data={dataRequestPlugin} handleGoTo={handleGetValue} />
          </Aside>
        </FlowSection>
      </MainContent>
    </C.Container>
  );
}

export default Students;
