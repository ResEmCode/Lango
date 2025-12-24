import type { Decorator } from '@storybook/react';

import '@/app/styles/index.scss';
import '../styles/index.scss';
import '@/app/styles/themes/index.scss';

export const StyleDecorator: Decorator = (StoryComponent) => <StoryComponent />;
