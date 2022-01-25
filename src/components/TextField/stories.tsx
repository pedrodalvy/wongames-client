import { Story, Meta } from '@storybook/react';
import TextField, { TextFieldProps } from 'components/TextField';
import { Email } from 'styled-icons/material-outlined';

export default {
  title: 'TextField',
  args: {
    label: 'E-mail',
    labelFor: 'E-mail',
    id: 'Email',
    initialValue: '',
    placeholder: 'any@email.com',
    icon: <Email />,
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: undefined },
  },
  component: TextField,
} as Meta;

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

export const WithError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

WithError.args = {
  error: 'Ops...something is wrong',
};
