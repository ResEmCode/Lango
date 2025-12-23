import type { Meta, StoryObj } from '@storybook/react';

import * as Icons from '../../assets/icons/index';

import { Button, type ButtonProps } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
};

const buttonProps: ButtonProps = {
  variant: 'primary',
  children: 'button',
  loading: false,
};

const buttonIcon = <Icons.SearchIcon />;

type Story = StoryObj<typeof Button>;
const Template: Story = { render: (args) => <Button {...args} /> };

export const Primary = { ...Template };
Primary.args = buttonProps;

export const Outline = { ...Template };
Outline.args = { ...buttonProps, variant: 'outline' };

export const PrimaryDisabled = { ...Template };
PrimaryDisabled.args = { ...buttonProps, variant: 'primary', disabled: true };

export const OutlineDisabled = { ...Template };
OutlineDisabled.args = { ...buttonProps, variant: 'outline', disabled: true };

export const PrimaryStartIcon = { ...Template };
PrimaryStartIcon.args = { ...buttonProps, startIcon: buttonIcon };

export const PrimaryEndIcon = { ...Template };
PrimaryEndIcon.args = { ...buttonProps, endIcon: buttonIcon };

export const OutlineStartIcon = { ...Template };
OutlineStartIcon.args = {
  ...buttonProps,
  variant: 'outline',
  startIcon: buttonIcon,
};

export const OutlineEndIcon = { ...Template };
OutlineEndIcon.args = {
  ...buttonProps,
  variant: 'outline',
  endIcon: buttonIcon,
};

export default meta;
