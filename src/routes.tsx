import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Draft from './Draft';
import Layout from './Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/test-dnd',
        element: <Draft />,
      },
    ],
  },
]);

export default router;

