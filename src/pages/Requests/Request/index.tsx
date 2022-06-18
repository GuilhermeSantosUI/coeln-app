import moment from 'moment';
import { useCallback, useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import {
  Aside,
  AsideTitle,
  MainContent,
  Section,
  Separator,
} from '../../../components/BasePage';

import Header from '../../../components/Header';
import Goback from '../../../components/Sidebar/Goback';

import ImgBeggar from '../../../assets/beggar-ilustration-one.png';

import HeaderSection from '../../../components/BasePage/HeaderSection';
import {
  AvatarContainer,
  ListContainer,
  Subtitle,
  Title,
} from '../../../components/BasePage/ListComponents';
import Button from '../../../components/Button';
import OptionButton from '../../../components/OptionButton';
import handleRandomAvatar from '../../../components/RandomImage';
import api from '../../../services/api';
import { FlowSection } from '../../MainPage/styles';
import { SectionContainer } from '../../Students/styles';
import * as C from '../styles';

function Request() {
  const { id } = useParams();
  const [request, setRequest] = useState<any>();

  useEffect(() => {
    (async function handleGet() {
      const { data } = await api.get(`/pedidos/${id}`);

      const formatedRequest = {
        ...data,
        isExpired:
          data?.data_devolucao && new Date() > new Date(data?.data_devolucao),
      };

      setRequest(formatedRequest);
    })();
  }, [id]);

  const handleCalculatePeriod = useCallback(
    (leftDate: string, rightDate: string) => {
      const a = moment(new Date(leftDate));
      const b = moment(new Date(rightDate));
      return a.diff(b, 'days');
    },
    [],
  );

  return (
    <C.Container>
      <Header />

      <MainContent>
        <Goback />

        <FlowSection>
          <Aside style={{ borderLeft: '1px solid #f2f2f2' }}>
            <SectionContainer
              style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
              <AsideTitle>
                Mais informações <br />
                sobre o pedido do aluno:
              </AsideTitle>

              <C.BeggarContainer to={`/student/${request?.usuario.matricula}`}>
                <C.BeggarTitle>Pedinte</C.BeggarTitle>
                <C.SpanName>Nome do pedinte:</C.SpanName>
                <C.BeggarName>{request?.usuario.nome}</C.BeggarName>
                <C.Registration>
                  Matricula: {request?.usuario.matricula}
                </C.Registration>

                <C.BeggarImage src={ImgBeggar} alt="imagem do pedinte" />
              </C.BeggarContainer>

              <C.PeriodContainer isExpired={request?.isExpired}>
                <C.PeriodHeader>
                  <C.PeriodTitle>
                    {request?.data_devolucao ? (
                      <>
                        Periodo (
                        {handleCalculatePeriod(
                          request?.data_devolucao,
                          request?.data_entregue,
                        )}
                        ) dias
                      </>
                    ) : (
                      <>Sem previsão</>
                    )}
                  </C.PeriodTitle>

                  {request?.isExpired && <C.PeriodTitle>Expirou</C.PeriodTitle>}
                </C.PeriodHeader>

                {request?.data_devolucao && (
                  <C.PeriodDates>
                    <C.DateContainer>
                      <C.DateTitle>
                        Data de <br />
                        entrega:
                      </C.DateTitle>

                      <C.Date>
                        {moment(request?.data_entregue).format('DD/MM/YYYY')}
                      </C.Date>
                    </C.DateContainer>
                    <C.DateContainer>
                      <C.DateTitle>
                        Data de <br />
                        devolução:
                      </C.DateTitle>
                      <C.Date>
                        {moment(request?.data_devolucao).format('DD/MM/YYYY')}
                      </C.Date>
                    </C.DateContainer>
                  </C.PeriodDates>
                )}
              </C.PeriodContainer>
            </SectionContainer>
          </Aside>

          <Section style={{ borderRight: 0 }}>
            <HeaderSection
              title="Componentes"
              subtitle="Lista de items requisitados"
            />

            {request?.items.map((item: any) => (
              <ListContainer key={item.componente.id}>
                <AvatarContainer>
                  {handleRandomAvatar()}

                  <Separator>
                    <Subtitle>Tipo: {item.componente.tipo.nome}</Subtitle>
                    <Title>{item.componente.nome}</Title>
                  </Separator>
                </AvatarContainer>

                <C.UnityComponent>
                  <Button loading={false} colorStyle="filled" size="small">
                    {item.quantidade} Unidades
                  </Button>

                  <OptionButton>
                    <FiArrowRight size={20} color="#8c8c8c" />
                  </OptionButton>
                </C.UnityComponent>
              </ListContainer>
            ))}
          </Section>
        </FlowSection>
      </MainContent>
    </C.Container>
  );
}

export default Request;
