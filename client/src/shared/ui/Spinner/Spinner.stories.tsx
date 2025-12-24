import type { Meta, StoryObj } from '@storybook/react-vite';

import { Spinner, type SpinnerProps } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'UI/Spinner',
  component: Spinner,
};

const spinnerProps: SpinnerProps = {
  size: '24',
};

type Story = StoryObj<typeof Spinner>;
const Template: Story = { render: (args) => <Spinner {...args} /> };

export const Default24 = { ...Template };
Default24.args = { ...spinnerProps };

export const Default32 = { ...Template };
Default32.args = { ...spinnerProps, size: '32' };

export const Default48 = { ...Template };
Default48.args = { ...spinnerProps, size: '48' };

export const Default64 = { ...Template };
Default64.args = { ...spinnerProps, size: '64' };

export const Default128 = { ...Template };
Default128.args = { ...spinnerProps, size: '128' };

export default meta;
