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

function Note() {
  const { isShown, handleSwitch } = useModal();
  const [notes, setNotes] = useState<any[]>([]);

  useEffect(() => {
    (async function handleGet() {
      const { data } = await api.get('/observacoes');
      setNotes(data);
    })();
  }, []);

  function handleRemoveNote() {}

  return (
    <C.SectionContainer>
      <HeaderSection
        title="Observações"
        subtitle="Coordenadoria de eletrônica"
      />

      {notes.map((note: any) => (
        <ListContainer key={note.id}>
          <AvatarContainer>
            {handleRandomAvatar()}

            <Separator>
              <Subtitle>Texto: </Subtitle>
              <Title>{note?.texto}</Title>
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
            onConfirm={handleRemoveNote}
            onCancel={() => handleSwitch()}
            title="Tem certeza?"
            message="Ao continuar, você estará removendo a observação. Sendo assim, não será possivel velo novamente."
          />
        }
      />
    </C.SectionContainer>
  );
}

export default Note;
