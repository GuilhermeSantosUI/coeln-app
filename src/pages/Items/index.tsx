import { useEffect, useState } from 'react';
import { FiArrowRight, FiCpu } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Separator } from '../../components/BasePage';
import HeaderSection from '../../components/BasePage/HeaderSection';
import {
  AvatarContainer,
  ListContainer,
  Subtitle,
  Title,
} from '../../components/BasePage/ListComponents';
import Button from '../../components/Button';
import OptionButton from '../../components/OptionButton';
import handleRandomAvatar from '../../components/RandomImage';
import api from '../../services/api';

import * as C from '../MainPage/styles';
import { UnityComponent } from './styles';

function Items() {
  const navigate = useNavigate();

  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    (async function handleGet() {
      const { data } = await api.get('/itens');
      setItems(data);
    })();
  }, []);

  return (
    <C.SectionContainer>
      <HeaderSection title="Items" subtitle="Coordenadoria de eletrônica">
        <OptionButton onClick={() => navigate('/components')}>
          <FiCpu size={20} color="#8C8C8C" />
        </OptionButton>
      </HeaderSection>

      {items.map((item) => (
        <ListContainer
          key={item.id}
          onClick={() => navigate(`/item/${item.id}`)}>
          <AvatarContainer>
            {handleRandomAvatar()}

            <Separator>
              <Subtitle>{item.quantidade} unidades.</Subtitle>
              <Title>{item.componente.nome}</Title>
            </Separator>
          </AvatarContainer>

          <UnityComponent>
            <Separator>
              <Button loading={false} colorStyle="tined" size="small">
                Laboratório: {item.organizador.laboratorio.id}
              </Button>
            </Separator>

            <OptionButton>
              <FiArrowRight size={20} color="#8c8c8c" />
            </OptionButton>
          </UnityComponent>
        </ListContainer>
      ))}
    </C.SectionContainer>
  );
}

export default Items;
