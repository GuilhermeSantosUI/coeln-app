import { useEffect, useState } from 'react';
import { FiArrowRight, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Separator } from '../../components/BasePage';
import HeaderSection from '../../components/BasePage/HeaderSection';
import Button from '../../components/Button';
import OptionButton from '../../components/OptionButton';
import randomImage from '../../components/RandomImage';
import api from '../../services/api';
import { SectionContainer } from '../MainPage/styles';
import * as C from './styles';

function Requests() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState<any[]>([]);

  useEffect(() => {
    (async function handleGet() {
      const { data } = await api.get('/pedidos');

      setRequests(data);
    })();
  }, []);

  function handleRandom() {
    const customImage =
      randomImage[Math.floor(Math.random() * randomImage.length)];

    return (
      <C.StudentImage src={customImage} alt="imagem-randomizada-de-aluno" />
    );
  }

  return (
    <SectionContainer>
      <HeaderSection title="Pedidos" subtitle="Coordenadoria de eletrônica">
        <OptionButton onClick={() => navigate('/students')}>
          <FiUser size={20} color="#8C8C8C" />
        </OptionButton>
      </HeaderSection>

      {requests.map((request) => (
        <C.FakeListItem
          key={request.id}
          onClick={() => navigate(`/request/${request.id}`)}>
          <C.FirstTest>
            {handleRandom()}
            <Separator>
              <C.Subtitle>Pedinte</C.Subtitle>
              <C.Title>{request.usuario.nome}</C.Title>
            </Separator>
          </C.FirstTest>

          <C.DateSection>
            {request.data_devolucao ? (
              <>
                <Button
                  loading={false}
                  colorStyle="tined"
                  size="small"
                  style={{ margin: 0 }}>
                  20/04/2022
                </Button>

                <FiArrowRight size={20} color="#8c8c8c" />

                <Button
                  loading={false}
                  colorStyle="filled"
                  size="small"
                  style={{ margin: 0 }}>
                  20/04/2022
                </Button>
              </>
            ) : (
              <Button
                loading={false}
                colorStyle="tined"
                size="small"
                style={{ margin: 0 }}>
                Sem previsão
              </Button>
            )}
          </C.DateSection>
        </C.FakeListItem>
      ))}
    </SectionContainer>
  );
}

export default Requests;
