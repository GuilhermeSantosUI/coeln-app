import { ComponentMeta, Story } from '@storybook/react';
import Modal, { ModalProps } from '.';
import ConfirmationModal, { ConfirmationModalProps } from './Confirmation';

export default {
  title: 'Alerts/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

export function Default(args: Story<ModalProps>) {
  return (
    <Modal
      isShown
      hide={() => {}}
      modalContent={
        <header style={{ marginRight: 40 }}>
          <h2>Exemplo de modal</h2>
        </header>
      }
      {...args}
    />
  );
}

Default.args = {};

export function Confirmation(args: Story<ConfirmationModalProps>) {
  return (
    <Modal
      isShown
      hide={() => {}}
      modalContent={
        <ConfirmationModal onConfirm={() => {}} onCancel={() => {}} {...args} />
      }
    />
  );
}

Confirmation.args = {
  title: 'Tem certeza?',
  message:
    'Ao continuar, você estará removendo o componente. Sendo assim, não será possivel velo novamente.',
};
