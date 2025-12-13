import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App.tsx';
import { ErrorBoundary } from './app/providers/ErrorBoundary/ui/ErrorBoundary.tsx';
import { LocalesProvider } from './app/providers/LocalesProvider/index.ts';
import { StoreProvider } from './app/providers/StoreProvider/ui/StoreProvider/StoreProvider.tsx';
import { ThemeProvider } from './app/providers/ThemeProvider/index.ts';

import '@/app/styles/index.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter basename='/'>
    <StoreProvider>
      <ThemeProvider>
        <LocalesProvider>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </LocalesProvider>
      </ThemeProvider>
    </StoreProvider>
  </BrowserRouter>,
);
