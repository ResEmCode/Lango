import type { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox, type CheckboxProps } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
};

const checkboxProps: CheckboxProps = {
  children: <div>Content</div>,
};

type Story = StoryObj<typeof Checkbox>;
const Template: Story = { render: (args) => <Checkbox {...args} /> };

export const Default = { ...Template };
Default.args = { ...checkboxProps };

export const Checked = { ...Template };
Checked.args = { ...checkboxProps, checked: true };

export const Disabled = { ...Template };
Disabled.args = { ...checkboxProps, disabled: true };

export const Error = { ...Template };
Disabled.args = { ...checkboxProps, error: 'error checkbox' };

export const CheckboxLarge = { ...Template };
CheckboxLarge.args = { ...checkboxProps, size: 'large' };
export default meta;
