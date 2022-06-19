import Button from '../../Button';
import * as C from '../styles';

import ImgApp from '../../../assets/coeln-app-icon.png';

interface ConfirmationModalProps {
  onConfirm: () => void;
  onCancel: () => void;
  title?: string;
  message: string;
}

function ConfirmationModal({
  onConfirm,
  onCancel,
  title,
  message,
}: ConfirmationModalProps) {
  return (
    <>
      <C.AppIcon src={ImgApp} alt="icone-da-coeln" />

      <C.TitleMessage>{title}</C.TitleMessage>
      <C.Message>{message}</C.Message>
      <C.ConfirmationButtons>
        <Button
          loading={false}
          colorStyle="filled"
          size="medium"
          onClick={onCancel}>
          Não
        </Button>

        <Button
          loading={false}
          colorStyle="tined"
          size="medium"
          onClick={onConfirm}>
          Sim
        </Button>
      </C.ConfirmationButtons>
    </>
  );
}

export default ConfirmationModal;
