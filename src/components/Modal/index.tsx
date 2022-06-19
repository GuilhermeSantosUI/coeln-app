import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { FiX } from 'react-icons/fi';
import OptionButton from '../OptionButton';

import * as C from './styles';

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: ReactNode;
}

function Modal({ isShown, hide, modalContent }: ModalProps) {
  const modal = (
    <>
      <C.Backdrop />
      <C.Wrapper>
        <C.StyledModal>
          <C.Header>
            <OptionButton onClick={hide}>
              <FiX size={20} color="#8c8c8c" />
            </OptionButton>
          </C.Header>
          <C.Content>{modalContent}</C.Content>
        </C.StyledModal>
      </C.Wrapper>
    </>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
}
export default Modal;
