import { ComponentMeta, Story } from '@storybook/react';
import Button, { ButtonProps } from '.';

export default {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {
    size: {
      defaultValue: 'small',
      control: {
        type: 'select',
        values: ['larger', 'medium', 'small'],
      },
    },
    colorStyle: {
      defaultValue: 'tined',
      control: {
        type: 'select',
        values: ['plain', 'gray', 'tined', 'filled'],
      },
    },
  },
} as ComponentMeta<typeof Button>;

export function Primary(args: Story<ButtonProps>) {
  return (
    <Button loading={false} {...args}>
      Olá, mundo!
    </Button>
  );
}
