import { Suspense } from 'react';
import type { Decorator } from '@storybook/react';

export const AsyncDecorator: Decorator = (ComponentStory) => {
  return (
    <Suspense fallback="">
      <ComponentStory />
    </Suspense>
  );
};
