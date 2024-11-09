import { createBrowserRouter, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Layout from './layouts';
import Backlog from './pages/Backlog';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
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
