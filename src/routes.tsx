import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import Layout from './Layout';
import Backlog from './Backlog';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/dashboard',
        element: <App />,
      },
      {
        path: '/backlog',
        element: <Backlog />,
      },
      // {
      //   path: '/test-dnd',
      //   element: <Draft />,
      // },
      {
        path: '*',
        element: <Navigate to={'dashboard'} />,
      },
    ],
  },
]);

export default router;
