import { Suspense } from 'react';

import { AppRouter } from '@/app/providers/router/ui';

const App = () => {
  return (
    <Suspense fallback={null}>
      <AppRouter />
    </Suspense>
  );
};

export default App;
