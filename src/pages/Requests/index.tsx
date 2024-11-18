import { useEffect, useState } from 'react';
import { FiArrowRight, FiPlus, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import { SearchBar, Separator } from '@/components/BasePage';
import HeaderSection from '@/components/BasePage/HeaderSection';
import { HeaderSeparator } from '@/components/BasePage/HeaderSection/styles';
import {
  AvatarContainer,
  ListContainer,
  RightSeparator,
  Subtitle,
  Title,
} from '@/components/BasePage/ListComponents';

import Button from '@/components/Button';
import api from '@/services/api';
import OptionButton from '@/components/OptionButton';
import handleRandomAvatar from '@/components/RandomImage';
import { SectionContainer } from '../MainPage/styles';
import { SkeletonContainer } from '../Students/styles';
import { SkeletonItem } from '../../components/Skeleton';

function Requests() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function handleGet() {
      setIsLoading(true);

      const { data } = await api.get('/pedidos');
      setRequests(data);

      setIsLoading(false);
    })();
  }, []);

  return (
    <SectionContainer>
      <HeaderSection title="Pedidos" subtitle="Coordenadoria de eletrônica">
        <HeaderSeparator>
          <SearchBar placeholder="Nome, matricula, data..." />

          <OptionButton onClick={() => navigate('/form')}>
            <FiPlus size={20} color="#8C8C8C" />
          </OptionButton>

          <OptionButton onClick={() => navigate('/students')}>
            <FiUser size={20} color="#8C8C8C" />
          </OptionButton>
        </HeaderSeparator>
      </HeaderSection>

      {isLoading ? (
        <SkeletonContainer>
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
        </SkeletonContainer>
      ) : (
        requests.map((request) => (
          <ListContainer
            key={request.id}
            onClick={() => navigate(`/request/${request.id}`)}>
            <AvatarContainer>
              {handleRandomAvatar()}
              <Separator>
                <Subtitle>Pedinte</Subtitle>
                <Title>{request.usuario.nome}</Title>
              </Separator>
            </AvatarContainer>

            {request.data_devolucao ? (
              <RightSeparator>
                <>
                  <Button loading={false} colorStyle="tined" size="small">
                    {moment(request?.data_entregue).format('DD/MM/YYYY')}
                  </Button>

                  <FiArrowRight size={20} color="#8c8c8c" />

                  <Button loading={false} colorStyle="filled" size="small">
                    {moment(request?.data_devolucao).format('DD/MM/YYYY')}
                  </Button>
                </>
              </RightSeparator>
            ) : (
              <Button loading={false} colorStyle="tined" size="small">
                Sem previsão
              </Button>
            )}
          </ListContainer>
        ))
      )}
    </SectionContainer>
  );
}

export default Requests;
