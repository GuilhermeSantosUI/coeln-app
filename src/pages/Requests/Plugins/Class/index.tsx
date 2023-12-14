import { useEffect, useState } from 'react';
import { FiEdit3, FiPlus, FiTrash } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { SearchBar, Separator } from '../../../../components/BasePage';
import HeaderSection from '../../../../components/BasePage/HeaderSection';
import { HeaderSeparator } from '../../../../components/BasePage/HeaderSection/styles';
import {
  AvatarContainer,
  ListContainer,
  Subtitle,
  Title,
} from '../../../../components/BasePage/ListComponents';
import Modal from '../../../../components/Modal';
import ConfirmationModal from '../../../../components/Modal/Confirmation';
import OptionButton from '../../../../components/OptionButton';
import handleRandomAvatar from '../../../../components/RandomImage';
import useModal from '../../../../hooks/modal';
import api from '../../../../services/api';
import * as C from '../styles';

function Class() {
  const navigate = useNavigate();

  const { isShown, handleSwitch } = useModal();

  const [classes, setClasses] = useState<any[]>([]);
  const [filter, setFilter] = useState<any[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    (async function handleGet() {
      const { data } = await api.get('/turmas');
      setClasses(data);
    })();
  }, []);

  useEffect(() => {
    setFilter(
      classes.filter((classData) =>
        classData.nome.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  }, [classes, search]);

  function handleRemoveClass() {}

  return (
    <C.SectionContainer>
      <HeaderSection title="Turmas" subtitle="Coordenadoria de eletrônica">
        <HeaderSeparator>
          <SearchBar
            placeholder="Ano..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <OptionButton onClick={() => navigate('/form')}>
            <FiPlus size={20} color="#8C8C8C" />
          </OptionButton>
        </HeaderSeparator>
      </HeaderSection>

      {filter.map((classData: any) => (
        <ListContainer key={classData.id}>
          <AvatarContainer>
            {handleRandomAvatar()}

            <Separator>
              <Subtitle>Período: </Subtitle>
              <Title>{classData?.nome}</Title>
            </Separator>
          </AvatarContainer>

          <Separator>
            <OptionButton>
              <FiEdit3 size={20} color="#8c8c8c" />
            </OptionButton>

            <OptionButton onClick={handleSwitch}>
              <FiTrash size={20} color="#8c8c8c" />
            </OptionButton>
          </Separator>
        </ListContainer>
      ))}

      <Modal
        isShown={isShown}
        hide={handleSwitch}
        modalContent={
          <ConfirmationModal
            onConfirm={handleRemoveClass}
            onCancel={() => handleSwitch()}
            title="Tem certeza?"
            message="Ao continuar, você estará removendo esta turma. Sendo assim, não será possivel velo novamente."
          />
        }
      />
    </C.SectionContainer>
  );
}

export default Class;
