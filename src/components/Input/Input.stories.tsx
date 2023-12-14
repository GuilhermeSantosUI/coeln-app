import { ComponentMeta, Story } from '@storybook/react';
import { Form } from '@unform/web';
import Input, { InputProps } from '.';

export default {
  title: 'Inputs/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export function Default(args: Story<InputProps>) {
  return (
    <Form onSubmit={() => {}}>
      <Input placeholder="Input para amostra" {...args} />
    </Form>
  );
}

Default.args = {
  name: 'testing',
};
