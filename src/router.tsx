import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import App from './App';
import PlaygroundPage from './pages/PlaygroundPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/signup',
        element: <SignupPage />,
      },
      {
        path: '/playground',
        element: <PlaygroundPage />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
