import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { store } from './store/index.ts';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from './routes.tsx';
import '@sass/index.sass';

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);

