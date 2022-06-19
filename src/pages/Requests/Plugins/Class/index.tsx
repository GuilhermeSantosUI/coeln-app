import { useEffect, useState } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';
import { Separator } from '../../../../components/BasePage';
import HeaderSection from '../../../../components/BasePage/HeaderSection';
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
  const { isShown, handleSwitch } = useModal();
  const [classes, setClasses] = useState<any[]>([]);

  useEffect(() => {
    (async function handleGet() {
      const { data } = await api.get('/turmas');
      setClasses(data);
    })();
  }, []);

  function handleRemoveClass() {}

  return (
    <C.SectionContainer>
      <HeaderSection title="Turmas" subtitle="Coordenadoria de eletrônica" />

      {classes.map((classData: any) => (
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
