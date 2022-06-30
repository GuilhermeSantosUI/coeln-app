import moment from 'moment';
import { useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';
import { Separator } from '../../../../components/BasePage';
import { ListContainer } from '../../../../components/BasePage/ListComponents';
import Button from '../../../../components/Button';
import OptionButton from '../../../../components/OptionButton';
import { useToggle } from '../../../../hooks/sideToggle';
import api from '../../../../services/api';
import { Subtitle, Title } from '../../styles';
import * as C from '../styles';

function AppHistory() {
  const { openRecord, setOpenRecord } = useToggle();

  const [records, setRecords] = useState<any[]>([]);

  useEffect(() => {
    (async function handleGet() {
      const { data } = await api.get('/historico');

      const formatedRecords = data.map((record: any) => ({
        ...record,
        inserted: record.insercao_delecao === 'inserido',
      }));

      setRecords(formatedRecords);
    })();
  }, [openRecord]);

  return (
    <C.AdminSidebarContainer>
      <C.AdminSidebar>
        <C.AdminHeader>
          <C.AdminTitle>Listagem de Histórico</C.AdminTitle>

          <OptionButton onClick={() => setOpenRecord(false)}>
            <FiX size={20} color="#8C8C8C" />
          </OptionButton>
        </C.AdminHeader>

        <C.AdminListContent style={{ overflowY: 'auto' }}>
          {records.map((record: any) => (
            <ListContainer key={record.id}>
              <Separator>
                <Subtitle>
                  Data: {moment(record?.data).format('DD/MM/YYYY')}
                </Subtitle>
                <Title>Em {record?.nome_tabela}</Title>
              </Separator>

              <Button
                loading={false}
                colorStyle={record.inserted ? 'tined' : 'filled'}
                size="small">
                {record?.insercao_delecao}
              </Button>
            </ListContainer>
          ))}
        </C.AdminListContent>

        <C.AdminSidebarFooter>
          Aqui aparecem todas as ações realizadas na aplicação, desde cadastros
          a remoções.
        </C.AdminSidebarFooter>
      </C.AdminSidebar>
    </C.AdminSidebarContainer>
  );
}

export default AppHistory;
