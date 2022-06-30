import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { differenceInDays } from 'date-fns';

import {
  Aside,
  AsideTitle,
  MainContent,
  Section,
  Separator,
} from '../../components/BasePage';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { useToggle } from '../../hooks/sideToggle';
import api from '../../services/api';
import Items from '../Items';
import Requests from '../Requests';
import * as C from './styles';
import AppHistory from './Plugins/AppHistory';
import Administrators from './Plugins/Administrators';

function MainPage() {
  const { params } = useParams();
  const { toggle, setToggle, openSide, openRecord } = useToggle();

  const [requests, setRequests] = useState<any[]>([]);

  const [appearSide, setAppearSide] = useState<boolean>(false);

  useEffect(() => {
    if (params === 'Items') setToggle(false);
    if (params === 'Pedidos') setToggle(true);
  }, [params]);

  useEffect(() => {
    (async function handleGet() {
      const { data } = await api.get<any[]>('/pedidos');

      const expiredRequests = data
        .filter(
          (res: any) =>
            res.data_devolucao && new Date(res.data_devolucao) < new Date(),
        )
        .map((request: any) => ({
          ...request,
          expiredDays: differenceInDays(
            new Date(),
            new Date(request.data_devolucao),
          ),
        }));

      setRequests(expiredRequests);
    })();
  }, []);

  function handleMakeAnotherSideAppear() {
    if (window.matchMedia('(max-width: 570px)').matches) {
      setAppearSide((oldValue) => !oldValue);
    }
  }

  useEffect(() => {
    handleMakeAnotherSideAppear();
  }, [window.matchMedia]);

  const expiredRequests = useMemo(
    () =>
      requests
        .filter(
          (res: any) =>
            res.data_devolucao && new Date(res.data_devolucao) < new Date(),
        )
        .map((request: any) => ({
          ...request,
          expiredDays: differenceInDays(
            new Date(),
            new Date(request.data_devolucao),
          ),
        })),
    [requests],
  );

  return (
    <C.Container>
      <Header onClick={handleMakeAnotherSideAppear} />

      <MainContent>
        <Sidebar />

        <C.FlowSection>
          <Section toggle={appearSide}>
            {toggle ? <Requests /> : <Items />}
          </Section>

          <Aside toggle={appearSide}>
            <AsideTitle>
              Expiraram da <br />
              data de devolução:
            </AsideTitle>

            <Separator>
              {expiredRequests.map((request) => (
                <C.ExpiredRequest
                  key={request.id}
                  to={`/student/${request?.usuario.matricula}`}>
                  <Separator>
                    <C.Subtitle>
                      Matricula: {request.usuario.matricula}
                    </C.Subtitle>
                    <C.Title>{request.usuario.nome}</C.Title>
                  </Separator>

                  <C.ForgotDays>há {request.expiredDays} dias</C.ForgotDays>
                </C.ExpiredRequest>
              ))}
            </Separator>
          </Aside>
        </C.FlowSection>
      </MainContent>

      {openSide && <Administrators />}
      {openRecord && <AppHistory />}
    </C.Container>
  );
}

export default MainPage;
