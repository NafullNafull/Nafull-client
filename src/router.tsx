import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: '/signup',
        element: <SignupPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
];

const router = createBrowserRouter(routes);
export default router;
