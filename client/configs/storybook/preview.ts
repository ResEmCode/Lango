import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react-vite';
import { setupWorker } from 'msw/browser';

import { RouterDecorator } from '@/shared/config/storybook/decorators/RouterDecorator';
import { StyleDecorator } from '@/shared/config/storybook/decorators/StyleDecorator';

const worker = setupWorker(...[]);

worker.start({
  onUnhandledRequest: 'bypass',
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      disable: false,
      element: '#root',
    },
    backgrounds: { disable: true },
  },
  decorators: [
    StyleDecorator,
    RouterDecorator,
    withThemeByDataAttribute({
      themes: { light: 'light', dark: 'dark' },
      defaultTheme: 'dark',
      attributeName: 'data-theme',
      parentSelector: 'body',
    }),
  ],
};

export default preview;
