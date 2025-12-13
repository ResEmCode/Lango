import type { Meta, StoryObj } from '@storybook/react';

import { Typography, type TypographyProps, type TypographyVariants } from './Typography';

const typographyVariants: TypographyVariants[] = [
  'regular_14',
  'regular_16',
  'regular_18',
  'regular_20',
  'medium_14',
  'medium_16',
  'medium_18',
  'medium_20',
  'semibold_16',
  'semibold_18',
  'semibold_20',
  'semibold_22',
  'bold_16',
  'bold_18',
  'bold_20',
  'bold_22',
  'bold_24',
];

export default {
  title: 'UI/Typography',
  component: Typography,
  args: {
    type: 'title',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: typographyVariants,
    },
    tag: {
      control: { type: 'select' },
      options: ['div', 'p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
  },
} satisfies Meta<TypographyProps<'div'>>;

const DefaultText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

const TypographyWrapper = (variant: TypographyVariants) => {
  const match = variant.match(/(\w+)_(\d+)$/);

  if (!match) return null;

  return (
    <div
      className='typography_block'
      style={{
        fontSize: `${match[2]}px`,
        fontWeight: `${match[1]}`,
      }}
    >
      <div className='typography_info'>
        <p>{match[2]}px</p>
        <span>({match[1]})</span>
      </div>
      <Typography variant={variant} tag='p'>
        {DefaultText}
      </Typography>
    </div>
  );
};

export const TypographyShowcase = {
  render: () => (
    <div className='typography_inner'>
      <h1 className='title'>Typography variants</h1>
      <div className='typography_content'>{typographyVariants.map(TypographyWrapper)}</div>
    </div>
  ),
} satisfies StoryObj<TypographyProps<'div'>>;
