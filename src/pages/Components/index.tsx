import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Aside,
  AsideTitle,
  MainContent,
  SearchBar,
  Section,
  Separator,
} from '../../components/BasePage';
import HeaderSection from '../../components/BasePage/HeaderSection';
import Header from '../../components/Header';
import Goback from '../../components/Sidebar/Goback';
import { FlowSection, SectionContainer } from '../MainPage/styles';
import Accordion from '../../components/Accordion';
import * as C from './styles';
import dataItemPlugin from '../Items/Plugins/data-item-plugin';
import api from '../../services/api';
import {
  AvatarContainer,
  ListContainer,
  Subtitle,
  Title,
} from '../../components/BasePage/ListComponents';
import handleRandomAvatar from '../../components/RandomImage';
import OptionButton from '../../components/OptionButton';
import { HeaderSeparator } from '../../components/BasePage/HeaderSection/styles';

function Components() {
  const navigate = useNavigate();

  const [components, setComponents] = useState<any[]>([]);

  useEffect(() => {
    (async function handleGet() {
      const { data } = await api.get('/componentes');
      setComponents(data);
    })();
  }, []);

  function handleGetValue(e: string) {
    navigate(`/item/plugins/${e}`);
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
                title="Componentes"
                subtitle="Listagem de componentes">
                <HeaderSeparator>
                  <SearchBar placeholder="Nome, tipo..." />
                  <OptionButton onClick={() => navigate('/form')}>
                    <FiPlus size={20} color="#8C8C8C" />
                  </OptionButton>
                </HeaderSeparator>
              </HeaderSection>

              {components.map((component) => (
                <ListContainer
                  key={component.id}
                  onClick={() => navigate(`/component/${component.id}`)}>
                  <AvatarContainer>
                    {handleRandomAvatar()}

                    <Separator>
                      <Subtitle>Tipo: {component.tipo.nome}</Subtitle>
                      <Title>{component.nome}</Title>
                    </Separator>
                  </AvatarContainer>

                  <C.UnityComponent>
                    {component.observacoes.length !== 0 ? (
                      <Separator>
                        <Subtitle>Verifique as observações</Subtitle>
                        <Title>
                          {component.observacoes.length}{' '}
                          {component.observacoes.length === 1
                            ? 'observação'
                            : 'observações'}
                        </Title>
                      </Separator>
                    ) : (
                      <Title>Não há observações</Title>
                    )}

                    <OptionButton>
                      <FiArrowRight size={20} color="#8c8c8c" />
                    </OptionButton>
                  </C.UnityComponent>
                </ListContainer>
              ))}
            </SectionContainer>
          </Section>

          <Aside>
            <AsideTitle>
              Mais informações <br />
              para detalhação de items:
            </AsideTitle>

            <Accordion data={dataItemPlugin} handleGoTo={handleGetValue} />
          </Aside>
        </FlowSection>
      </MainContent>
    </C.Container>
  );
}

export default Components;
