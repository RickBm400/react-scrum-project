import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Layout from './Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
    ],
  },
]);

export default router;

