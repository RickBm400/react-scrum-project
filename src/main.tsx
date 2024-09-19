import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { store } from './store/index.ts';
import { Provider } from 'react-redux';
import App from './App.tsx';

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
