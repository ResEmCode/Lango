import { render } from '@testing-library/react';

import {
  Typography,
  TYPOGRAPHY_TEST_IDS,
  type TypographyProps,
  type TypographyTags,
} from './Typography';

import styles from './Typography.module.scss';

const typographyProps = {
  children: 'text',
  variant: 'regular_16',
  tag: 'h1',
} satisfies TypographyProps<TypographyTags>;

describe('Typography variant', () => {
  const TypographyVariants: TypographyProps<TypographyTags>['variant'][] = [
    'bold_16',
    'bold_24',
    'medium_16',
    'regular_16',
  ];

  TypographyVariants.forEach((typographyVariant) => {
    test(`should correct show ${typographyVariant} variant when provided`, () => {
      const { getByTestId } = render(
        <Typography {...typographyProps} variant={typographyVariant} />,
      );
      const container = getByTestId(TYPOGRAPHY_TEST_IDS.CONTAINER);

      expect(container).toHaveClass(styles[typographyVariant]);
    });
  });
});

describe('Typography', () => {
  test('should render div tage by default', () => {
    const { getByTestId } = render(<Typography {...typographyProps} />);

    const container = getByTestId(TYPOGRAPHY_TEST_IDS.CONTAINER);

    expect(container.tagName).toBe('H1');
  });
});
