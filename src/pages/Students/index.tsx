import { useEffect, useState } from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Accordion from '../../components/Accordion';
import {
  Aside,
  AsideTitle,
  MainContent,
  SearchBar,
  Section,
  Separator,
} from '../../components/BasePage';
import HeaderSection from '../../components/BasePage/HeaderSection';
import { HeaderSeparator } from '../../components/BasePage/HeaderSection/styles';
import {
  AvatarContainer,
  ListContainer,
  RightSeparator,
  Subtitle,
  Title,
} from '../../components/BasePage/ListComponents';
import Button from '../../components/Button';
import Header from '../../components/Header';
import OptionButton from '../../components/OptionButton';
import handleRandomAvatar from '../../components/RandomImage';
import Goback from '../../components/Sidebar/Goback';
import api from '../../services/api';
import { FlowSection, SectionContainer } from '../MainPage/styles';
import { SkeletonItem } from '../../components/Skeleton';
import dataRequestPlugin from '../Requests/Plugins/data-request-plugin';

import * as C from './styles';

function Students() {
  const navigate = useNavigate();
  const [students, setStudents] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function handleGet() {
      setIsLoading(true);

      const { data } = await api.get('/alunos');
      setStudents(data);

      setIsLoading(false);
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
            <SectionContainer>
              <HeaderSection
                title="Alunos"
                subtitle="Lista de items requisitados">
                <HeaderSeparator>
                  <SearchBar placeholder="Nome, matricula, curso..." />
                  <OptionButton onClick={() => navigate('/form')}>
                    <FiPlus size={20} color="#8C8C8C" />
                  </OptionButton>
                </HeaderSeparator>
              </HeaderSection>

              {isLoading ? (
                <C.SkeletonContainer>
                  <SkeletonItem
                    width="100%"
                    height="70px"
                    style={{ border: '1px solid #ffffff' }}
                  />

                  <SkeletonItem
                    width="100%"
                    height="70px"
                    style={{ border: '1px solid #ffffff' }}
                  />

                  <SkeletonItem
                    width="100%"
                    height="70px"
                    style={{ border: '1px solid #ffffff' }}
                  />

                  <SkeletonItem
                    width="100%"
                    height="70px"
                    style={{ border: '1px solid #ffffff' }}
                  />
                </C.SkeletonContainer>
              ) : (
                students.map((student) => (
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
                ))
              )}
            </SectionContainer>
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
