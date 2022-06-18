import { useEffect, useMemo, useState } from 'react';
import { FiX } from 'react-icons/fi';
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
import OptionButton from '../../components/OptionButton';
import Sidebar from '../../components/Sidebar';
import { useToggle } from '../../hooks/sideToggle';
import api from '../../services/api';
import Items from '../Items';
import Requests from '../Requests';
import * as C from './styles';

function MainPage() {
  const { params } = useParams();
  const { toggle, setToggle, openSide, setOpenSide } = useToggle();

  const [requests, setRequests] = useState<any[]>([]);

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
      <Header />

      <MainContent>
        <Sidebar />

        <C.FlowSection>
          <Section>{toggle ? <Requests /> : <Items />}</Section>

          <Aside>
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

      {openSide && (
        <C.AdminSidebarContainer>
          <C.AdminSidebar>
            <C.AdminHeader>
              <C.AdminTitle>
                Listagem de <br />
                Adimnistradores
              </C.AdminTitle>

              <OptionButton onClick={() => setOpenSide(false)}>
                <FiX size={20} color="#8C8C8C" />
              </OptionButton>
            </C.AdminHeader>

            <C.AdminListContent>
              <p>Lista de admnistradores</p>
            </C.AdminListContent>

            <C.AdminSidebarFooter>
              Os servidores só podem ser adicionados/excluídos pelo dono do
              servidor.
            </C.AdminSidebarFooter>
          </C.AdminSidebar>
        </C.AdminSidebarContainer>
      )}
    </C.Container>
  );
}

export default MainPage;
