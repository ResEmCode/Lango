import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input, type InputProps } from './Input';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
};

const inputProps: InputProps = {
  placeholder: 'User...',
};

type Story = StoryObj<typeof Input>;
const Template: Story = { render: (args) => <Input {...args} /> };

export const Default = { ...Template };
Default.args = { ...inputProps };

export const WithLabel = { ...Template };
WithLabel.args = { ...inputProps, label: 'username' };

export const InputError = { ...Template };
InputError.args = { ...inputProps, error: 'error username!' };

export const InputErrorWithLable = { ...Template };
InputErrorWithLable.args = { ...inputProps, label: 'username', error: 'error username!' };

export default meta;
