import Button from '../../Button';
import * as C from '../styles';

interface ConfirmationModalProps {
  onConfirm: () => void;
  onCancel: () => void;
  message: string;
}

function ConfirmationModal({
  onConfirm,
  onCancel,
  message,
}: ConfirmationModalProps) {
  return (
    <>
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
