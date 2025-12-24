import type { Meta, StoryObj } from '@storybook/react-vite';

import { Form, type FormProps } from './Form';

const meta: Meta<typeof Form> = {
  title: 'UI/Form',
  component: Form,
};

const formProps: FormProps = {
  onSubmit: () => {},
  children: <div>Content</div>,
};

type Story = StoryObj<typeof Form>;
const Template: Story = { render: (args) => <Form {...args} /> };

export const Default = { ...Template };
Default.args = { ...formProps };

export default meta;
